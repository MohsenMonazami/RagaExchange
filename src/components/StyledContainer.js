import "bootstrap-icons/font/bootstrap-icons.css";
import Styles from "../styles/StyledContainer.css";
import gradient from "../images/wallet-gradient-2.png";
import { Link } from "react-router-dom";
import RedButton from "./RedButton";
import WhiteButton from "./WhiteButton";
import Chart from "./Chart";
import Items from "./Items";
import TransActions from "./TransActions";

const StyledContainer = () => {
  return (
    <div className="col-md-8 col-sm-12 me-5 mt-5 p-0 height-80 ">
      <div className="container-fluid p-0 pb-5 mb-5 me-5 shadow container-radious">
        <div className="row justify-content-end">
          <img src={gradient} className="" />
          <div className="col-md-5">
            <RedButton />
            <WhiteButton />
          </div>
        </div>
        <div className="row p-0 m-0 mt-4 justify-content-center ms-5">
          <div className="col-md-4 col-sm-12 p-4">
            <Chart />
          </div>
          <div className="col-md-8">
            <div className="container">
              <Items />
              <div className="row">
                <div className="container">
                  <div className="row mt-4">
                    <h5 className="main-title">تراکنش های اخیر</h5>
                  </div>
                  <TransActions />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledContainer;
