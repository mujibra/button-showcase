import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer";
import ProductPage from "./Pages/ProductPage";
import DetalPage from "./Pages/DetailPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/detail/:id" element={<DetalPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
