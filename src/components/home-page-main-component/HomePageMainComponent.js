import "../home-page-main-component/home-page-main-component.css";
import amuraImg from "../../images/home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
export default function HomePageMainComponent() {
    return (
        <div className="home-page-main-component-container">
            <div className="home-page-main-content-container">
                <div className="bold-txt font-2"> Amura. </div>{" "}
                <div className="secoundary-highlight bold-txt font-2"> Awesome Raa! </div>{" "}
                <div className="home-page-main-description">
                    Awsome 2 BHK Smart Homes.{" "}
                    <span className="secoundary-highlight"> Starting @ 42.75 Laks Only / - </span>{" "}
                    Near infosys Pocharam.{" "}
                </div>{" "}
                <button className="secoundary-btn">
                    Explore <FontAwesomeIcon icon={faArrowRightLong}> </FontAwesomeIcon>{" "}
                </button>{" "}
            </div>{" "}
            <img src={amuraImg} alt="amura image" className="amura-img" />
        </div>
    );
}
