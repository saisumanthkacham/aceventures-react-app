import "../vertical-card-component/vertical-card-component.css"
import aashayaImg from  "../../images/aashaya-banner.png"


export default function VerticalCardComponent()
{
    return(
        
        <div className="vertical-card-container">
                          <img src={aashayaImg} alt="project image" class="project-image"></img>
                <div className="verical-card-content">
            
                      <div className="vertical-card-title" >
                        AASHAYA
                      </div>
                      <div className="vertical-card-description" >
                        Commercial Development on Hyderabad-Warangal Highway
                      </div>
                </div>
   
        </div>
    )
}