import "bootstrap-icons/font/bootstrap-icons.css";
import Styles from "../styles/StyledContainer.css";
import gradient from "../images/wallet-gradient-2.png";
import { Link } from "react-router-dom";
import chart from "../images/chart-type.png";

const StyledContainer = () => {
  return (
    <>
      <div className="col-md-8 mx-5 mt-5 p-0 height-80 ">
        <div className="container-fluid p-0 pb-5 mb-5 ms-5 shadow container-radious">
          <div className="row justify-content-end">
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
          <div className="row p-0 m-0 mt-4 justify-content-center ms-5">
            <div className="col-md-4 p-4">
              <div className="chart-box">
                <p className="main-title text-center p-0">دارایی</p>
                <img className="chart" src={chart} />
                <div className="row mt-3 mb-4">

                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <th scope="row" className="pe-5 text-start unit-text" colSpan={2}>
                          Lira
                        </th>
                        <td className="text-end ps-5 price-text">$5.12</td>
                      </tr>
                      <tr>
                        <th scope="row" className="pe-5 text-start unit-text" colSpan={2}>
                          Dollar
                        </th>
                        <td className="text-end ps-4 price-text">$12.45</td>
                      </tr>
                      <tr>
                        <th scope="row" className="pe-4 text-start unit-text" colSpan={2}>
                          Euro
                        </th>
                        <td className="text-end ps-4 price-text">$8.25</td>
                      </tr>
                    </tbody>
                    <tfoot className="border-top">
                      <tr>
                        <th scope="row" className="pe-4 text-start total-price text-danger" colSpan={2}>
                          تومان 61.03
                        </th>
                        <td className="text-end ps-5 total-title">مجموع</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="container m">
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
                    <p>حواله به حساب</p>
                  </div>
                  <div className="col-md-3 card item">
                    <i className="bi bi-house-door" />
                    <p>انتقال داخلی</p>
                  </div>
                </div>
                <div className="row">
                  <div className="container">
                    <div className="row mt-4">
                      <h5 className="main-title">تراکنش های اخیر</h5>
                    </div>
                    <div className="row mt-2">
                      <div className="container transaction-item px-4 py-3">
                        <div className="row mt-2">
                          <div className="col-md-1  text-end">
                            <p className="status-success">موفق </p>
                          </div>
                          <div className="col-md-3  text-end">
                            <p className="date">
                              15 Mordad 1402 <span className="ms-3">19:24</span>
                            </p>
                          </div>
                          <div className="col-md-5  text-end">
                            <p className="caption">
                              ...توضیحات: لورم ایپسوم یک متن ساخت
                            </p>
                          </div>
                          <div className="col-md-3  text-end">
                            <div className="row ">
                              <p className="transaction-title">
                                انتقال داخلی <i className="bi bi-house-door" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="container transaction-item px-4 py-3">
                        <div className="row mt-2">
                          <div className="col-md-1  text-end">
                            <p className="status-success">موفق</p>
                          </div>
                          <div className="col-md-3  text-end">
                            <p className="date">
                              13 Mordad 1402 <span className="ms-3">23:45</span>
                            </p>
                          </div>
                          <div className="col-md-5  text-end">
                            <p className="caption">
                              ...توضیحات: لورم ایپسوم یک متن ساخت
                            </p>
                          </div>
                          <div className="col-md-3  text-end">
                            <div className="row ">
                              <p className="transaction-title">
                                شارژ کیف پول <i className="bi bi-house-door" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="container transaction-item px-4 py-3">
                        <div className="row mt-2">
                          <div className="col-md-1  text-end">
                            <p className="status-fail">ناموفق </p>
                          </div>
                          <div className="col-md-3  text-end">
                            <p className="date">
                              2 Tir 1402 <span className="ms-3">14:23</span>
                            </p>
                          </div>
                          <div className="col-md-5  text-end">
                            <p className="caption">
                              ...توضیحات: لورم ایپسوم یک متن ساخت
                            </p>
                          </div>
                          <div className="col-md-3  text-end">
                            <div className="row ">
                              <p className="transaction-title">
                                شارژ کیف پول <i className="bi bi-house-door" />
                              </p>
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
