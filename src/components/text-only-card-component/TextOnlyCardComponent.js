import "../text-only-card-component/text-only-card-component.css"

export default function TextOnlyCardComponent(){
    return (
        <div className="text-only-card-container">
           <div className="text-only-card-title">
               Homes,Offices and Malls by
              <span className="primary-highlight"> Ace Ventures</span>
           </div>
           <div className="text-only-card-description">
           If you are looking for a home or commercial investment in East Hyderabad, Ace has developments in Kothapet, Nagole, Vanasthalipuram, Narapally, and Pocharam.
           </div>
        </div>
    )
}