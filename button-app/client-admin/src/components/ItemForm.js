import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../store/actionCreators/products";

export default function ItemForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState({
    name: "",
    description: "",
    price: "",
    mainImg: "",
    CategoryId: "",
    Images: [],
  });

  const [image, setImage] = useState({
    image1: "",
    image2: "",
    image3: "",
  });

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };

  const handleImageProduct = (e) => {
    const { name, value } = e.target;
    setImage({ ...image, [name]: value });
  };

  const addProductHandle = (e) => {
    console.log(products);
    e.preventDefault();
    for (const key in image) {
      products.Images.push({ imgUrl: image[key] });
    }
    dispatch(createProduct(products))
      .then((_) => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="flex justify-center ">
      <div className="pt-6 w-2/5 ">
        <p className="mb-10">Add New Menu</p>
        <form
          onSubmit={addProductHandle}
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

          <div className="relative z-0 mb-6 w-full group">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              ImageUrl
            </label>
            <input
              type="text"
              name="image1"
              onChange={handleImageProduct}
              value={image.image1}
              className="p-2.5 mb-6 mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder=" "
              required
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              ImageUrl
            </label>
            <input
              type="text"
              name="image2"
              onChange={handleImageProduct}
              value={image.image2}
              className="p-2.5 mb-6 mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder=" "
              required
            />
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              ImageUrl
            </label>
            <input
              type="text"
              name="image3"
              onChange={handleImageProduct}
              value={image.image3}
              className="p-2.5 mb-6 mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder=" "
              required
            />
          </div>
          <div className="flex justify-center px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
