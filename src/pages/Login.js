import styles from "../styles/Login.css";
import Lira from "../images/login-gradient-2.png";
import RLogo from "../images/p-logo-1.png";
import WhiteLogo from "../images/logo_full_white.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row jusify-content-center m-0  w-100">
        <div className="col-md-6">
          <div className="container">
            <img src={RLogo} alt="logo" className="red-logo mb-4" />
            <p className="mb-5">راگا اکسچنج درگاه پرداخت امن و سریع پول</p>
            <div className="input-group margin-left">
              <span class="input-group-text mb-4">+98</span>
              <input
                type="text"
                class="phone-input mb-4"
                placeholder="شماره موبایل"
              />
            </div>
            <Link
              className="btn btn-danger red-button margin-left"
              to={"/login/sms"}
            >
              ورود
            </Link>
          </div>
        </div>
        <div className="col-md-6 w-50" id="background-image">
          <img src={WhiteLogo} alt="Lira" className="white-logo" />
        </div>
      </div>
    </div>
  );
};
export default Login;
