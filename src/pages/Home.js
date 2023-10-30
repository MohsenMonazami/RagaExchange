import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import StyledContainer from "../components/StyledContainer";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-end">
          <StyledContainer />
          <SideMenu />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
