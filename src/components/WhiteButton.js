import { Link } from "react-router-dom";
import Styles from "../styles/WhiteButton.css"

const WhiteButton = () => {
    return(
            <Link className="btn btn-white" to={"/login"}>
                شارژ کیف پول
              </Link>
    )
}

export default WhiteButton;