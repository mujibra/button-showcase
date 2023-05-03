import ListCategories from "./ListCategories";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  createCategories,
} from "../store/actionCreators/category";

export default function Table() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line
  }, [dispatch]);
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // eslint-disable-next-line
  const [name, setName] = useState("");

  const handleAddCategory = (e) => {
    e.preventDefault();
    dispatch(createCategories({ name })).then((_) => {
      setName("");
      setIsOpen(false);
    });
  };

  return (
    <>
      <div className="flex justify-between px-10">
        <p className="font-medium text-xl">Categories List</p>
        <div className="inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="px-4 py-2 text-sm font-medium text-white  rounded-md bg-cyan-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Add Category
          </button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-5"
                  >
                    Add Category
                  </Dialog.Title>
                  <form onSubmit={handleAddCategory}>
                    <div className="mt-2">
                      <div>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          name="name"
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
      <div className="p-4 flex justify-center pt-6 relative overflow-x-auto  sm:rounded-lg">
        <table className=" table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Updated At
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {isLoading && (
            <tbody>
              <tr>
                <td>Loading...</td>
              </tr>
            </tbody>
          )}
          {error && (
            <tbody>
              <tr>
                <td>Error...</td>
              </tr>
            </tbody>
          )}
          {!isLoading && !error && <ListCategories></ListCategories>}
        </table>
      </div>
    </>
  );
}
