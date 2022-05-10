import './App.css';
import Header from "../src/components/header-component/HeaderComponent"
import Footer from "../src/components/footer-component/FooterComponent"
import HorizontalCard from "../src/components/horizontal-card-component/HorizontalCardComponent"
import VerticalCard from "../src/components/vertical-card-component/vertical-card-component"
import TextOnlyCard from './components/text-only-card-component/TextOnlyCardComponent'
import HomePageMain from "./components/home-page-main-component/HomePageMainComponent"
function App() {
  return (
    <div className="App">

      <Header/>
      <HomePageMain/>
      <TextOnlyCard/>
      <HorizontalCard/>
      <VerticalCard/>
      <VerticalCard/>
      <HorizontalCard/>
      <Footer/>
    </div>

  );
}

export default App;
