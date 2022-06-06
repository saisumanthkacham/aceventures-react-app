import "../home-page-main-component/home-page-main-component.css";
import amuraImg from "../../images/home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
export default function HomePageMainComponent() {
    return (
        <div className="home-page-main-component-container">
            <img src={amuraImg} alt="amura image" className="amura-img" />
            <div className="home-page-main-content-container">
                <div className="secoundary-highlight bold-txt font-2">Luxury Apartments </div>{" "}
                <div className="home-page-main-description">
                    Awesome 2 BHK Flats, Starting @ 35 Laks Only /- Near Shamirpet ORR EXIT-7
                </div>
                <a href="#Floor Plans" className="secoundary-btn">
                    Explore Floor Plans<FontAwesomeIcon icon={faArrowRightLong}> </FontAwesomeIcon>{" "}
                </a>{" "}
            </div>{" "}
        </div>
    );
}
