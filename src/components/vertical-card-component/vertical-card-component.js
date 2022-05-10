import "../vertical-card-component/vertical-card-component.css"



export default function VerticalCardComponent(props)
{
    return(
        
        <div className="vertical-card-container">
                          <img src={props.img} alt="project image" class="project-image"/>
                <div className="verical-card-content">
            
                      <div className="vertical-card-title" >
                       {props.title}
                      </div>
                      <div className="vertical-card-description" >
                        {props.description}
                       
                      </div>
                </div>
   
        </div>
    )
}