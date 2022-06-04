import "./App.css";
import Header from "../src/components/header-component/HeaderComponent";
import Footer from "../src/components/footer-component/FooterComponent";
import HorizontalCard from "../src/components/horizontal-card-component/HorizontalCardComponent";
import VerticalCard from "../src/components/vertical-card-component/vertical-card-component";
import TextOnlyCard from "./components/text-only-card-component/TextOnlyCardComponent";
import HomePageMain from "./components/home-page-main-component/HomePageMainComponent";
import aashayaImg from "../src/images/2.png";
import jpMallImg from "../src/images/3.png";
import projectImg from "../src/images/1.png";
import ajantaImg from "../src/images/4.png";

function App() {
    return (
        <div className="App">
            <Header />
            <HomePageMain />
            <TextOnlyCard />
            <HorizontalCard title="AALAYA" loc="Warangal-Hyderabad Highway." img={projectImg} />
            <VerticalCard
                title="AASHAYA"
                description=" Commercial Development on Hyderabad-Warangal Highway"
                img={aashayaImg}
            />
            <VerticalCard
                title="JP MALL"
                description=" Commercial Development on Chaitanyapuri Metro,Kothapet"
                img={jpMallImg}
            />
            <HorizontalCard title="AJANTA" loc="Nagole- 7 min from Nagole Metro" img={ajantaImg} />
            <Footer />
        </div>
    );
}

export default App;
