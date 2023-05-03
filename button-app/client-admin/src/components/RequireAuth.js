import { Navigate } from "react-router-dom";

export default function RequiredAuth({ children }) {
  const token = localStorage.getItem("access_token");

  if (!token) return <Navigate to={"/login"} />;

  return children;
}

export function RequireNoAuth({ children }) {
  const token = localStorage.getItem("access_token");

  if (token) return <Navigate to={"/dashboard"} />;
  return children;
}
