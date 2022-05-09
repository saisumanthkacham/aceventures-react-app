import "../footer-component/footer-component.css"
import logo from "../../images/logo-aceventure.svg"
export default function FooterComponent()
{
return(
    <div className="footer-container">
       <img className="footer-image" alt="logo" src={logo}/>
       <div className="footer-contact-container"> 
           <div className="footer-subheading">CONTACT</div>
           <div className="footer-contact-content">
               <div className="footer-contact">+91 40 2404 0099</div>
               <div>sales@aceventures.com</div>
               <div className="footer-contact-description">504 and 505 Ace Krishna Prime Lakshmi Nagar Kothapet Hyderabad-500035</div>
           </div>
       </div>
       <div className="footer-projects-container"> 
           <div className="footer-subheading">PROJECTS</div>
           <div className="footer-projects-content">
               <div className="footer-subheading2">RESIDENTIAL</div>
               <div>Ajanta at Nagole</div>
               <div>Aalaya at Narapally</div>
               <div className="footer-subheading2">COMMERCIAL</div>
               <div>Aashaya at Narapally</div>
               <div>JP Mall at Kothapet</div>
           </div>
       </div>
       <div className="footer-subheading">ABOUT US</div>
       <div className="footer-copyright">
       <div className="footer-subheading2">Copyright</div>
       <div>All right reserved to Ace Ventures india Pvt Ltd</div>
       </div>
     </div>

)
}