import "./App.css";
import Header from "../src/components/header-component/HeaderComponent";
import Footer from "../src/components/footer-component/FooterComponent";
import HorizontalCard from "../src/components/horizontal-card-component/HorizontalCardComponent";
import VerticalCard from "../src/components/vertical-card-component/vertical-card-component";
import TextOnlyCard from "./components/text-only-card-component/TextOnlyCardComponent";
import HomePageMain from "./components/home-page-main-component/HomePageMainComponent";
import homeImg from "../src/images/Render.png";
import projectImg from "../src/images/building3.png";
import clubHouseImg2 from "../src/images/clubhouse2.png";
import clubHouseImg from "../src/images/club-house.png";
import bhk2Img from "../src/images/2bhk.png";
import bhk3Img from "../src/images/3bhk.png";
function App() {
    return (
        <div className="App">
            <Header />
            <HomePageMain />
            {/* <TextOnlyCard /> */}
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

            {/* <img src={clubHouseImg} alt="amura image" className="amura-img" /> */}
            <HorizontalCard title="Arial View" loc="Golden Heights" />
            <iframe
                src="https://app.lapentor.com/sphere/golden-heights-aerial?scene=629340da6d91ccc868034b6a"
                title="ArielView"
                width="373"
                height="350"
                style={{ border: 0 }}
                allowFullScreen></iframe>

            <Footer />
        </div>
    );
}

export default App;
