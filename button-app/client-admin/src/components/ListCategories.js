import { TrashIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { deleteCategories } from "../store/actionCreators/category";

export default function ListTable() {
  const { categoryReducer } = useSelector((state) => state);
  const category = categoryReducer.category;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCategories(id));
  };

  return (
    <tbody>
      {category.map &&
        category.map((data) => (
          <tr
            key={data.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-4">{data.id}</td>
            <td className="px-6 py-4">{data.name}</td>
            <td className="px-6 py-4">{data.createdAt}</td>
            <td className="px-6 py-4">{data.updatedAt}</td>
            <td className="px-6 py-4">
              <div className="flex flex-col w-3/6">
                <button
                  onClick={() => {
                    handleDelete(data.id);
                  }}
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <TrashIcon
                    className="-ml-1 mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
    </tbody>
  );
}
