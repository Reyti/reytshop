import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import React from "react";
import Image from "next/image";

import { ReactSortable } from "react-sortablejs";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
  category: assignedCategory,
  properties: assignedProperties,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [category, setCategory] = useState(assignedCategory || "");

  const [productProperties, setProductProperties] = useState(
    assignedProperties || {}
  );
  const [price, setPrice] = useState(existingPrice || "");
  const [images, setImages] = useState(existingImages || []);
  const [goToProducts, setGoToProducts] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const router = useRouter();

  const [categoryError, setCategoryError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    axios.get("/api/categories").then((result) => {
      setCategories(result.data);
      setCategoriesLoaded(true);
    });
  }, []);

  async function saveProduct(ev) {
    ev.preventDefault();

    if (!category) {
      setCategoryError(true);
      return;
    }

    if (!title) {
      setNameError(true);
      return;
    }

    if (!description) {
      setDescriptionError(true);
      return;
    }

    if (!price) {
      setPriceError(true);
      return;
    }

    if (images.length === 0) {
      setImageError(true);
      return;
    }

    setCategoryError(false);
    setNameError(false);
    setDescriptionError(false);
    setPriceError(false);
    setImageError(false);

    const data = {
      title,
      description,
      price,
      images,
      category,
      properties: productProperties,
    };

    if (_id) {
      //update
      await axios.put("/api/products", { ...data, _id });
    } else {
      //create
      await axios.post("/api/products", data);
    }

    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push("/productspage");
  }
  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  }
  function updateImagesOrder(images) {
    setImages(images);
  }
  function setProductProp(propName, value) {
    setProductProperties((prev) => {
      const newProductProps = { ...prev };
      newProductProps[propName] = value;
      return newProductProps;
    });
  }

  const propertiesToFill = [];
  if (categoriesLoaded && categories.length > 0 && category) {
    let catInfo = categories.find(({ _id }) => _id === category);
    propertiesToFill.push(...catInfo.properties);
    while (catInfo?.parent?._id) {
      const parentCat = categories.find(
        ({ _id }) => _id === catInfo?.parent?._id
      );
      propertiesToFill.push(...parentCat.properties);
      catInfo = parentCat;
    }
  }

  return (
    <form onSubmit={saveProduct}>
      <label className={nameError ? "error-label" : ""}>Product name</label>
      <input
        type="text"
        placeholder="product name"
        value={title}
        onChange={(ev) => {
          setTitle(ev.target.value);
          setNameError(false);
        }}
      />
      {nameError && (
        <p className="error-message">Please enter a product name.</p>
      )}
      {categoriesLoaded ? (
        <div
          className={`select-container ${categoryError ? "error-field" : ""}`}
        >
          <select
            value={category}
            onChange={(ev) => {
              setCategory(ev.target.value);
              setCategoryError(false);
            }}
          >
            <option value="">Uncategorized</option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
          {categoryError && (
            <p className="error-message">Please choose a category.</p>
          )}
        </div>
      ) : (
        <div>Loading categories...</div>
      )}
      {propertiesToFill.length > 0 &&
        propertiesToFill.map((p) => (
          <div key={p.name} className="">
            <label>{p.name[0].toUpperCase() + p.name.substring(1)}</label>
            <div>
              <select
                value={productProperties[p.name]}
                onChange={(ev) => setProductProp(p.name, ev.target.value)}
              >
                {p.values.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      <label>Photos</label>
      <div className="mb-2 flex flex-wrap gap-1">
        <ReactSortable
          list={images}
          className="flex flex-wrap gap-1"
          setList={updateImagesOrder}
        >
          {!!images?.length &&
            images.map((link) => (
              <div
                key={link}
                className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200"
              >
                <Image src={link} alt="" className="rounded-lg" />
              </div>
            ))}
        </ReactSortable>
        {isUploading && (
          <div className="h-24 flex items-center">Uploading...</div>
        )}
        <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <div>Add image</div>
          <input type="file" onChange={uploadImages} className="hidden" />
        </label>
        {imageError && (
          <p className="error-message">Please upload at least one image.</p>
        )}
      </div>
      <label className={descriptionError ? "error-label" : ""}>
        Description
      </label>
      <textarea
        placeholder="description"
        value={description}
        onChange={(ev) => {
          setDescription(ev.target.value);
          setDescriptionError(false);
        }}
      />
      {descriptionError && (
        <p className="error-message">Please enter a description.</p>
      )}
      <label className={priceError ? "error-label" : ""}>Price (in USD)</label>
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(ev) => {
          setPrice(ev.target.value);
          setPriceError(false);
        }}
      />
      {priceError && <p className="error-message">Please enter a price.</p>}
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
