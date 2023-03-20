import { Navigate, Outlet } from "react-router-dom";

function AdmPages() {
  const admin = sessionStorage.getItem("admin");

  return admin ? <Outlet /> : <Navigate to="/login" />;
}

export default AdmPages;
