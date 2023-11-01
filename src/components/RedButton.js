import { Link } from "react-router-dom";
import Styles from "../styles/RedButton.css"

const RedButton = () => {
    return(
            <Link className="btn btn-red" to={"/login"}>
                برداشت وجه
              </Link>
    )
}

export default RedButton;