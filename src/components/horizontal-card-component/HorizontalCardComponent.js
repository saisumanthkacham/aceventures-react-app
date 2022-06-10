import "../horizontal-card-component/horizontal-card-component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
export default function HorizontalCardComponent(props) {
    return (
        <div className="horizontal-card-container" id={props.title}>
            {props.title && (
                <div className="horizontal-card-content">
                    <div className="horizontal-card-title">{props.title}</div>
                    {props.loc && (
                        <div className="horizontal-card-location-container">
                            <div className="horizontal-card-location">{props.loc}</div>
                            <FontAwesomeIcon
                                icon={faArrowRightLong}
                                className="card-right-arrow"></FontAwesomeIcon>
                        </div>
                    )}
                </div>
            )}
            <div className="horizontal-img-container">
                {props.img && (
                    <img
                        className="project-image "
                        src={props.img}
                        style={{ height: props.height }}
                        alt="project image"
                    />
                )}
                {props.img2 && (
                    <img
                        className="project-image img2"
                        src={props.img2}
                        style={{ height: props.height2 }}
                        alt="project image"
                    />
                )}

                {props.img3 && (
                    <img
                        className="project-image img3"
                        src={props.img3}
                        style={{ height: props.height3 }}
                        alt="project image"
                    />
                )}
                <div className="project-image-beside-container">
                    {props.img4 && (
                        <img
                            className="project-image-beside img4"
                            src={props.img4}
                            style={{ height: props.height4}}
                            alt="project image"
                        />
                    )}

                    {props.img5 && (
                        <img
                            className="project-image-beside"
                            src={props.img5}
                            style={{ height: props.height5 }}
                            alt="project image"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
