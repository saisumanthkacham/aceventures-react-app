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

            <HorizontalCard
                title="Floor Plans"
                loc="Two and Three BHK"
                img={bhk2Img}
                img2={bhk3Img}
            />
            <HorizontalCard title="Master Plan" img3={planImg} height="11.5rem" />

            <HorizontalCard title="Arial View" loc="Golden Heights" />

            <IFrame
                src="https://app.lapentor.com/sphere/golden-heights-aerial?scene=629340da6d91ccc868034b6a"
                title="ArielView"
            />

            <Footer />
        </div>
    );
}

export default App;
