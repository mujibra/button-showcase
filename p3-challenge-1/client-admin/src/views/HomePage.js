import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="flex flex-row">
      <div className="basis-2/12">
        <Navbar />
      </div>
      <div className="basis-10/12 bg-sky-100 h-screen pt-6">
        <Outlet />
      </div>
    </div>
  );
}
