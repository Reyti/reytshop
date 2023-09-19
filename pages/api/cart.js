import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function Handle(req, res) {
  await mongooseConnect();
  const ids = req.body.ids;
  const products = await Product.find({ _id: ids });
  res.json(products);
}
