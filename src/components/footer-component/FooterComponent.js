import "../footer-component/footer-component.css";
import logo from "../../images/logoWText.png";
export default function FooterComponent() {
    return (
        <div>
            <div className="footer-container">
                <img className="footer-image" alt="logo" src={logo} />{" "}
                <div className="footer-contact-container">
                    <div className="footer-subheading"> CONTACT </div>{" "}
                    <div className="footer-contact-content">
                        <div className="footer-contact"> +91 9494256257 </div>{" "}
                        <div> vbgindiainfra @gmail.com </div>{" "}
                        <div className="footer-contact-description">
                            401, Ratna Complex, Beside Image Hosptial, Ameerpet, Hyderabad - 500 073{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
                <div className="footer-projects-container">
                    <div className="footer-subheading"> PROJECTS </div>{" "}
                    <div className="footer-projects-content">
                        <div className="footer-subheading2"> RESIDENTIAL </div>{" "}
                        <div> Ajanta at Nagole </div> <div> Aalaya at Narapally </div>
                        <div className="footer-subheading2"> COMMERCIAL </div>{" "}
                        <div> Aashaya at Narapally </div> <div> JP Mall at Kothapet </div>
                    </div>{" "}
                </div>{" "}
                <div className="footer-subheading"> ABOUT US </div>{" "}
                <div className="footer-copyright">
                    <div className="footer-subheading2"> Copyright </div>{" "}
                    <div> All right reserved to xxx ventures </div>{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
}
