import chart from "../images/chart-type.png";
import Styles from "../styles/Chart.css"

const Chart = () => {
    return(
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
    )
}

export default Chart;