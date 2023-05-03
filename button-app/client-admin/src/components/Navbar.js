import logo from "../button.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="flex justify-center">
      <div className="flex-shrink-0 bg-white p-5">
        <div className="flex justify-center">
          <img className="h-20" src={logo} alt="pcture" />
        </div>
        <div className="p-2 w-full mt-2.5">
          <span className="text-gray-600">Main menu</span>
        </div>
        <hr />
        <div className="p-2 w-full">
          <Link to="" className="flex  text-gray-600 hover:text-blue-600 p-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 22.8787C4.34315 22.8787 3 21.5355 3 19.8787V9.87866C3 9.84477 3.00169 9.81126 3.00498 9.77823H3C3 9.20227 3.2288 8.64989 3.63607 8.24262L9.87868 2.00002C11.0502 0.828445 12.9497 0.828445 14.1213 2.00002L20.3639 8.24264C20.7712 8.6499 21 9.20227 21 9.77823H20.995C20.9983 9.81126 21 9.84477 21 9.87866V19.8787C21 21.5355 19.6569 22.8787 18 22.8787H6ZM12.7071 3.41423L19 9.70713V19.8787C19 20.4309 18.5523 20.8787 18 20.8787H15V15.8787C15 14.2218 13.6569 12.8787 12 12.8787C10.3431 12.8787 9 14.2218 9 15.8787V20.8787H6C5.44772 20.8787 5 20.4309 5 19.8787V9.7072L11.2929 3.41423C11.6834 3.02371 12.3166 3.02371 12.7071 3.41423Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="ml-2.5">Dashboard</span>
          </Link>
          <Link
            className="flex  mt-2.5 text-gray-600 hover:text-blue-600 p-2"
            to="tableCategories"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="ml-2.5">Categories</span>
          </Link>

          <Link
            to="addUser"
            className="flex  mt-2.5 text-gray-600 hover:text-blue-600 p-1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 5H7C6.44772 5 6 5.44772 6 6V18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18V6C18 5.44772 17.5523 5 17 5ZM7 3C5.34315 3 4 4.34315 4 6V18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18V6C20 4.34315 18.6569 3 17 3H7Z"
                fill="currentColor"
              ></path>
              <path d="M8 7H16V9H8V7Z" fill="currentColor"></path>
              <path d="M8 11H16V13H8V11Z" fill="currentColor"></path>
              <path d="M8 15H13V17H8V15Z" fill="currentColor"></path>
            </svg>
            <span className="ml-2.5">Register Admin</span>
          </Link>
          <hr className="mb-5 mt-5" />
        </div>
        <button
          onClick={logoutHandler}
          className="shadow-sm w-full text-white rounded-md hover:bg-blue-500 flex items-center px-5 py-2 transition-colors duration-150 justify-center bg-blue-600"
        >
          <span className="text-sm">Log out</span>
        </button>
      </div>
    </div>
  );
}
