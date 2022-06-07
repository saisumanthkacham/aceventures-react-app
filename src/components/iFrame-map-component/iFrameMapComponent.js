import "./iFrameMapComponent.css"

export const IFrameMap=(props)=>{
    return (<iframe
        className="iFrameMap"
        src={props.src}
        title={props.title}
        height={window.innerWidth>800?"700":"250"}
        frameBorder="0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"/>)
}