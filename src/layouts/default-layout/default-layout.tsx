import { Outlet } from "react-router-dom";
import { Sidebar } from "src/features/sidebar";

const DefaultLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
