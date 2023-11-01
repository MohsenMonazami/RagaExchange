import Styles from "../styles/Items.css"

const Items = () => {
    return(
        <div>
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
        </div>
    )
}

export default Items;