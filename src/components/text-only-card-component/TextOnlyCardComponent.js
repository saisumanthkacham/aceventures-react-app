import "../text-only-card-component/text-only-card-component.css"
import logo from "../../images/logo.png"
export default function TextOnlyCardComponent(){
    return (
        <div className="text-only-card-and-logo-container">
        <div className="text-only-card-container">
           <div className="text-only-card-title">
               Luxury apartments by<br/>
              <span className="primary-highlight"> VB Green India</span>
           </div>
           {/* <div className="text-only-card-description">
           
           </div> */}
        </div>
        </div>
    )
}