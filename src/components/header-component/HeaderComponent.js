import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../header-component/header-component.css";
import logo from "../../images/HEADEWR.png";
import { useEffect, useState } from "react";

export default function HeaderComponent() {
    const [screen, setScreen] = useState(0);
    let resizeWindow = () => {
        setScreen(window.innerWidth);
    };
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    const locationLink =
        "https://app.lapentor.com/sphere/golden-heights-aerial?scene=629340da6d91ccc868034b6a";
    return (
        <div className="header-container">
            <img alt="logo" src={logo} className="header-logo"></img>

            <div className="header-right-icons-container">
                {screen > 480 ? (
                    <div className="header-icon-phone header-right-icon">
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +91-9494256257
                    </div>
                ) : (
                    <a href="tel:[9494256257]" className="header-icon-phone header-right-icon">
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{" "}
                    </a>
                )}

                <a href={locationLink} className="header-right-icon ">
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                </a>
            </div>
        </div>
    );
}
