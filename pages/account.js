import Header from "@/components/header";
import router from "next/router";

export default function Account() {
  function goBack() {
    router.push("/");
  }

  return (
    <>
      <Header />

      <h1 className="text-center">
        Nothing here for now🥲 Do You want to go back?
      </h1>
      <div className="flex gap-2 justify-center">
        <button
          className="px-4 py-1 rounded-md bg-red-200 text-red-600 px-4 py-1 rounded-sm shadow-sm"
          onClick={goBack}
        >
          Yes
        </button>
        <button
          className="px-4 py-1 rounded-md bg-white text-gray-800 px-4 py-1 rounded-sm border border-gray-200 shadow-sm"
          onClick={goBack}
        >
          NO
        </button>
      </div>
    </>
  );
}
