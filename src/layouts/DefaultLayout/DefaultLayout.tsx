import { Outlet } from "react-router-dom";
import Sidebar from "src/modules/sidebar/components/Sidebar";

export default function DefaultLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
