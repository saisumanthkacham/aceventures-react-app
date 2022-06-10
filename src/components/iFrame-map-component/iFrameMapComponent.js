import "./iFrameMapComponent.css"

export const IFrameMap=(props)=>{
    return (<iframe
        className="iFrameMap"
        src={props.source}
        title={props.title}
        height={window.innerWidth>800?"700":"250"}
        frameBorder="0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"/>)
}