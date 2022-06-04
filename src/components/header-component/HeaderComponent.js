import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import {faPhone,faBars} from "@fortawesome/free-regular-svg-icons"
import "../header-component/header-component.css";
import logo from "../../images/logo.png";

export default function HeaderComponent() {
    const locationLink="https://app.lapentor.com/sphere/golden-heights-aerial?scene=629340da6d91ccc868034b6a"
    return (
        <div className="header-container">
            <img alt="logo" src={logo} className="header-logo">
            </img>
            
            <div className="header-right-icons-container">
            <a href="tel:[9494256257]" className="header-icon-phone header-right-icon"  ><FontAwesomeIcon icon={faPhone} >
                </FontAwesomeIcon></a>
            <a href={locationLink} className="header-right-icon "  ><FontAwesomeIcon icon={faLocationDot} >
                </FontAwesomeIcon></a>
            </div>
        </div>
    );
}
