import styles from '../styles/Sms.css'
import RLogo from "../images/p-logo-1.png";
import WhiteLogo from "../images/logo_full_white.png";
import { Link, Navigate } from "react-router-dom";

const Sms = () => {

    return(
        <div className="container-fluid p-0">
      <div className="row jusify-content-center m-0  w-100">
        <div className="col-md-6">
          <div className="container">
            <img src={RLogo} alt="logo" className="red-logo mb-4" />
            <p className="mb-3">راگا اکسچنج درگاه پرداخت امن و سریع پول</p>
            <p className="mb-3">کد فعالسازی برای شماره‌ی 989121234567+ ارسال شد</p>
            <Link className='edit-number' to={'/login'}>ویرایش شماره</Link>
            <div className="mt-4">
              <input
                type="text"
                className="code-input mb-4"
                placeholder="****"
              />
            </div>
            <Link
              className="btn btn-danger red-button margin-left"
              to={"/home"}
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
    )

}
export default Sms;