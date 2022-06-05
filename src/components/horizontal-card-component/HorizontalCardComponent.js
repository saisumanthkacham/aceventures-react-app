import "../horizontal-card-component/horizontal-card-component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
export default function HorizontalCardComponent(props) {
    return (
        <div className="horizontal-card-container" id={props.title}>
            {props.title && (
                <div className="horizontal-card-content">
                    <div className="horizontal-card-title">{props.title}</div>
                    {props.loc &&<div className="horizontal-card-location-container">
                        <div className="horizontal-card-location">{props.loc}</div>
                        <FontAwesomeIcon
                            icon={faArrowRightLong}
                            className="card-right-arrow"></FontAwesomeIcon>
                    </div>}
                </div>
            )}
          <div className="horizontal-img-container">
          {props.img &&<img src={props.img} style={{height:props.height}} alt="project image" class="project-image " />}
            {props.img2 &&<img src={props.img2} style={{height:props.height2}} alt="project image" class="project-image img2" />}
          </div>
       
        </div>
    );
}
