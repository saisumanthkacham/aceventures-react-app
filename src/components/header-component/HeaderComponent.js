import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
// import {faPhone,faBars} from "@fortawesome/free-regular-svg-icons"
import "../header-component/header-component.css";
import logo from "../../images/logo.png";

export default function HeaderComponent() {
    return (
        <div className="header-container">
            <img alt="logo" src={logo} className="header-logo">
            </img>
            <div className="header-right-icons-container">
                <FontAwesomeIcon icon={faPhone} className="header-icon-phone header-right-icon">
                </FontAwesomeIcon>
                <FontAwesomeIcon icon={faBars} className="header-right-icon">
                </FontAwesomeIcon>
            </div>
        </div>
    );
}
