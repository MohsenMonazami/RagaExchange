import styles from "../styles/SideMenu.css";
import Logo from "../images/dashboard-dashboard-sidebar-vertical-logo-full-1.png";
import Avatar from "../images/dashboard-dashboard-sidebar-vertical-img.png"
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    // <div className="container-fluid  d-flex justify-content-end">

      <div className="col-md-2 p-2 vh-100 d-flex flex-column border-left">
        <div className="row justify-content-center">
          <img src={Logo} className="col-md-6 mt-5" />
        </div>
        <div className="row justify-content-center">
          <img src={Avatar} className="col-md-6 mt-5"/>
        </div>
        <div className="col-md-12">
        <nav class="navbar navbar-expand-lg navbar-light mt-2">
          <div class="container">
            <ul class="navbar-nav flex-column vw-100">
  
              <li class="nav-item mb-2 ">
                <Link class="nav-link text-end" href="#">
                خانه <i class="bi bi-house-door mx-2"></i> 
                </Link>
              </li>
          
              <li class="nav-item mb-2">
                <Link class="nav-link text-end" href="#">
                کیف پول  <i class="bi bi-wallet mx-2"></i> 
                </Link>
              </li>

              <li class="nav-item mb-2">
                <Link class="nav-link text-end" href="#">
                مستر کارت  <i class="bi bi-credit-card mx-2"></i> 
                </Link>
              </li>

              <li class="nav-item mb-2">
                <Link class="nav-link text-end" href="#">
                انتقال وجه بانکی  <i class="bi bi-arrow-left-right mx-2"></i> 
                </Link>
              </li>

              <li class="nav-item mb-2">
                <Link class="nav-link text-end" href="#">
                برداشت وجه  <i class="bi bi-box-arrow-down mx-2"></i> 
                </Link>
              </li>

              <li class="nav-item mb-2">
                <Link class="nav-link text-end" href="#">
                تراکنش ها <i class="bi bi-list-check mx-2"></i> 
                </Link>
              </li>

              <li class="nav-item mb-2">
                <Link class="nav-link text-end" href="#">
                پروفایل  <i class="bi bi-person mx-2"></i> 
                </Link>
              </li>

              <hr className="ms-3"/>

              <li class="nav-item mb-2">
                <Link class="nav-link bold text-danger text-end" href="#">
                خروج از حساب  <i class="bi bi-box-arrow-left mx-2"></i> 
                </Link>
              </li>

            </ul>
          </div>
        </nav>
        </div>
      </div>
    // </div>
  );
};

export default SideMenu;
