import "./App.css";
import Header from "../src/components/header-component/HeaderComponent";
import Footer from "../src/components/footer-component/FooterComponent";
import HorizontalCard from "../src/components/horizontal-card-component/HorizontalCardComponent";
import HomePageMain from "./components/home-page-main-component/HomePageMainComponent";
import homeImg from "../src/images/Render.png";
import projectImg from "../src/images/building3.png";
import clubHouseImg2 from "../src/images/clubhouse2.png";
import clubHouseImg from "../src/images/club-house.png";
import bhk2Img from "../src/images/2bhk.png";
import bhk3Img from "../src/images/3bhk.png";
import planImg from "../src/images/master-plan.png";
import { IFrame } from "./components/iFrame-component/iFrameComponent";
import { IFrameMap } from "./components/iFrame-map-component/iFrameMapComponent";
import amenetiesImg1 from "../src/images/amenetiesImg1.png"
import amenetiesImg2 from "../src/images/amenetiesImg2.png"
import amenetiesImg3 from "../src/images/amenetiesImg3.png"
import amenetiesImg4 from "../src/images/amenetiesImg4.png"


function App() {
    return (
        <div className="App">
            <Header />
            <HomePageMain />
            <HorizontalCard
                title="Golden Heights"
                loc="Hyderabad-Karimnagar Highway."
                img={homeImg}
                img2={projectImg}
            />

            <HorizontalCard
                title="Amenities"
                loc="Club House"
                img={clubHouseImg}
                img2={clubHouseImg2}
            />
            <br/><br/>
            <img className="ameneties-img" src={amenetiesImg1}/>
            <img className="ameneties-img" src={amenetiesImg2}/>
            <img className="ameneties-img" src={amenetiesImg3}/>
            <img className="ameneties-img" src={amenetiesImg4}/>

            <HorizontalCard
                title="Floor Plans"
                loc="Two and Three BHK"
                img4={bhk2Img}
                img5={bhk3Img}
            />

            <HorizontalCard title="Arial View" loc="Golden Heights" />
            <IFrame
                src="https://app.lapentor.com/sphere/golden-heights-aerial?scene=629340da6d91ccc868034b6a"
                title="ArielView"
            />

            <HorizontalCard title="Master Plan" img3={planImg} height="11.5rem" />
            
            <div>
            
            </div>

            <HorizontalCard title="Location" loc="Golden Heights" />
            <IFrameMap
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15055.81763540025!2d78.57273191683123!3d17.588521214639215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1242943a8151f509!2zMTfCsDM1JzE4LjEiTiA3OMKwMzQnMzAuMCJF!5e1!3m2!1sen!2sin!4v1654626819021!5m2!1sen!2sin"
                title="google map"
            />
           

            <Footer />
        </div>
    );
}

export default App;
