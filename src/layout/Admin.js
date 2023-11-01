import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";

const Admin = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-end">
        <Outlet />
        <SideMenu />
      </div>
    </div>
  );
};

export default Admin;
