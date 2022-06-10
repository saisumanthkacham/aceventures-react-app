import "../footer-component/footer-component.css";
import logo from "../../images/logoWText.png";
export default function FooterComponent() {
    return (
        <div>
            <div className="footer-container">
                <img className="footer-image" alt="logo" src={logo} />{" "}
                <div className="footer-copyright">
                    <div className="footer-subheading"> About Us</div>
                    <div className="footer-subheading-content">
                        VB GREEN INDIA INFRA is a leading Realestate Company in South India Striving
                        for Quality and Perfection to Provide you with the best luxurious and
                        affordable Residential and Commercial Projects.
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="footer-subheading"> Contact Us</div>
                    <div className="footer-subheading-content">
                        <div className="footer-contact"> +91 9494256257 </div> vbgindiainfra
                        @gmail.com
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="footer-subheading"> Address </div>
                    <div className="footer-subheading-content">
                        401, Ratna Complex, Beside Image Hosptial, Ameerpet, Hyderabad - 500 073
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="footer-subheading"> Copyright </div>{" "}
                    <div> All rights reserved to VB Green India Infra Pvt Ltd </div>{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
}
