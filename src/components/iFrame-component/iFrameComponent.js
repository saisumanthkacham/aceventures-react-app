import "./iFrameComponent.css"

export const IFrame=(props)=>{
    return (<iframe
        className="iFrame"
        src={props.src}
        title={props.title}
        height={window.innerWidth>800?"700":"250"}
        allowFullScreen 
       > </iframe>)
}