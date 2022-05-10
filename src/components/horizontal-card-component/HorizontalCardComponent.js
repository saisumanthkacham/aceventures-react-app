import "../horizontal-card-component/horizontal-card-component.css"
import projectImg from  "../../images/project-banner-final.webp"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons"
export default function HorizontalCardComponent()
{
    return(
        <div className="horizontal-card-container">
                <div className="horizontal-card-content">
                 <div className="horizontal-card-qoute" >
                         We believe good design makes life beautiful
                 </div>
                 <div className="horizontal-card-title" >
                        AALAYA
                 </div>
                 <div className="horizontal-card-location-container" >
                     <div className="horizontal-card-location">
                     Warangal-hyderabad highway
                     </div>
                     <FontAwesomeIcon icon={faArrowRightLong} className="card-right-arrow"></FontAwesomeIcon>
                 </div>
             </div>
             <img src={projectImg} alt="project image" class="project-image"/>
             <div className="Horizontal-card-white-space"></div>
        </div>
    )
}