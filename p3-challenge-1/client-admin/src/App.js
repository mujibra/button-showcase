import "./App.css";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import Table from "./components/Table";
import CategoriesTable from "./components/CategoriesTable";
import ItemForm from "./components/ItemForm";
import AddUserPage from "./components/AddUserPage";
import EditProduct from "./components/EditProduct";
import { Routes, Route } from "react-router-dom";
import RequiredAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <HomePage />
            </RequiredAuth>
          }
        >
          <Route path="edit/:id" element={<EditProduct />} />
          <Route path="" element={<Table />} />
          <Route path="tableCategories" element={<CategoriesTable />} />
          <Route path="addProduct" element={<ItemForm />} />
          <Route path="addUser" element={<AddUserPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
