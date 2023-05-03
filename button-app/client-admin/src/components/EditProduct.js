import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { editProduct } from "../store/actionCreators/products";

export default function ItemForm() {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    productReducer: { detail },
  } = useSelector((state) => state);

  useEffect(() => {
    if (detail) {
      setProducts((prev) => ({
        ...prev,
        name: detail.name,
        description: detail.description,
        price: detail.price,
        mainImg: detail.mainImg,
        CategoryId: detail.CategoryId,
      }));
    }
  }, [detail]);

  const [products, setProducts] = useState({
    name: "",
    description: "",
    price: "",
    mainImg: "",
    CategoryId: "",
  });

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };

  const editHandler = (e) => {
    e.preventDefault();
    dispatch(editProduct(detail.id, products)).then((_) => {
      navigate("/");
    });
  };

  return (
    <div className="flex justify-center ">
      <div className="pt-6 w-2/5 ">
        <p className="mb-10">Edit Product</p>
        {detail && (
          <form
            onSubmit={editHandler}
            className="bg-white p-5 rounded-md shadow-mb"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                value={products.name}
                onChange={inputHandle}
                name="name"
                type="text"
                className="p-2.5 mb-6 mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                value={products.description}
                onChange={inputHandle}
                name="description"
                type="text"
                className="p-2.5 mb-6 mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                value={products.CategoryId}
                onChange={inputHandle}
                name="CategoryId"
                className="p-2.5 mb-6 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="1">Tops Collection</option>
                <option value="2">Bottoms Collection</option>
                <option value="2">Outwear Collection</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                value={products.price}
                onChange={inputHandle}
                name="price"
                type="number"
                className="p-2.5 mb-6 mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <input
                value={products.mainImg}
                onChange={inputHandle}
                name="mainImg"
                type="text"
                className="p-2.5 mb-6 mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="flex justify-center px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Edit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
