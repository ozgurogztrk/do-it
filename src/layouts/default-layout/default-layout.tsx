import { Outlet } from "react-router-dom";
import Sidebar from "src/features/sidebar";

export default function DefaultLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
