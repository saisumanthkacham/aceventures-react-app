import './App.css';
import Header from "../src/components/header-component/HeaderComponent"
import Footer from "../src/components/footer-component/FooterComponent"
import HorizontalCard from "../src/components/horizontal-card-component/HorizontalCardComponent"
import VerticalCard from "../src/components/vertical-card-component/vertical-card-component"
function App() {
  return (
    <div className="App">

      <Header></Header>
      <HorizontalCard></HorizontalCard>
      <VerticalCard></VerticalCard>
      <VerticalCard></VerticalCard>
      <HorizontalCard></HorizontalCard>
      <Footer></Footer>
    </div>

  );
}

export default App;
