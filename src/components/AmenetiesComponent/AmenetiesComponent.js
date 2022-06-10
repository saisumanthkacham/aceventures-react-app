import "../AmenetiesComponent/Ameneties-component.css"

export const AmenetiesCard=(props)=>{

    return(<div className="amaneties-container">
    <img className="ameneties-img" alt="ameneties" src={props.img1}/>
    <img className="ameneties-img" alt="ameneties" src={props.img2}/>
    <img className="ameneties-img" alt="ameneties" src={props.img3}/>
    <img className="ameneties-img" alt="ameneties" src={props.img4}/>
    </div>)
}