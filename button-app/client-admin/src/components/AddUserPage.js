import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../store/actionCreators/user";

export default function Example() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    email: "",
    password: "",
    phoneNumber: 0,
    address: "",
  });

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const addProductHandle = (e) => {
    e.preventDefault();
    dispatch(register(users))
      .then((_) => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="mt-10 sm:mt-0">
      <div className="mb-6 mt-6">
        <div className="mb-6 mt-10">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <form onSubmit={addProductHandle} className="w-2/5">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      value={users.email}
                      onChange={inputHandle}
                      name="email"
                      type="text"
                      className="p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      value={users.password}
                      onChange={inputHandle}
                      name="password"
                      type="password"
                      className="p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      value={users.phoneNumber}
                      onChange={inputHandle}
                      name="phoneNumber"
                      type="number"
                      className="p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <textarea
                      value={users.address}
                      onChange={inputHandle}
                      name="address"
                      type="number"
                      className="p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
