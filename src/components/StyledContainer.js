import "bootstrap-icons/font/bootstrap-icons.css";
import Styles from "../styles/StyledContainer.css";
import gradient from "../images/wallet-gradient-2.png";
import { Link } from "react-router-dom";

const StyledContainer = () => {
  return (
    <>
      <div className="col-md-8 mx-5 mt-5 p-0 height-80 ">
        <div className="container-fluid p-0 pb-5 shadow container-radious">
          <div className="row justify-content-end">
            {/* <div className="bg-gradient">sa</div> */}
            <img src={gradient} className="" />
            <div className="col-md-5">
              <Link className="btn btn-red" to={"/login"}>
                برداشت وجه
              </Link>
              <Link className="btn btn-white" to={"/login"}>
                شارژ کیف پول
              </Link>
            </div>
          </div>
          <div className="row p-0 m-0 mt-4 justify-content-center">
            <div className="col-md-4 bg-success">
              <div className="container">s</div>
            </div>
            <div className="col-md-8">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-3 card item">
                    <i className="bi bi-house-door" />
                    <p>واریز از طریق بانک</p>
                  </div>
                  <div className="col-md-3 card item">
                    <i className="bi bi-house-door" />
                    <p>مسترکارت فیزیکی</p>
                  </div>
                  <div className="col-md-3 card item">
                    <i className="bi bi-house-door" />
                    <p>مسترکارت</p>
                  </div>
                  <div className="col-md-3 card item">
                    <i className="bi bi-house-door" />
                    <p>دریافت نقدی</p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-3 card item">
                    <i className="bi bi-house-door" />
                    <p>لینک پرداخت</p>
                  </div>
                  <div className="col-md-3 card item">
                    <i className="bi bi-house-door" />
                    <p>درگاه پرداخت</p>
                  </div>
                  <div className="col-md-3 card item">
                    <i className="bi bi-house-door" />
                    <p>حواله به حساب ارزی</p>
                  </div>
                  <div className="col-md-3 card item">
                    <i className="bi bi-house-door" />
                    <p>انتقال داخلی</p>
                  </div>
                </div>
                <div className="row">
                  <div className="container">
                    <div className="row mt-4 px-5">
                      <h5 className="main-title">تراکنش های اخیر</h5>
                    </div>
                    <div className="row">
                      <div className="container">
                        <div className="row justify-content-end shadow p-3">
                          <div className="col-md-1 bg-danger text-end">
                            <p className="status-success">موفق </p>
                          </div>
                          <div className="col-md-3 bg-warning text-end">
                            <p className="date">15 Mordad 1402 <span className="ms-3">19:24</span></p>
                          </div>
                          <div className="col-md-5 bg-danger text-end">
                            <p className="caption">...توضیحات: لورم ایپسوم یک متن ساختگی</p>
                          </div>
                          <div className="col-md-3 bg-warning text-end align-items-center">
                            <div className="row ">                            
                              <p className="transaction-title">انتقال داخلی <i className="bi bi-house-door" /></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyledContainer;
