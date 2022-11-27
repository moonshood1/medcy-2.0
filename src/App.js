import "./App.css";
import { Footer } from "./common/Footer";
import { Header } from "./common/Header";
import { FourthPage } from "./pages/FourthPage";
import { MainPage } from "./pages/MainPage";
import { SecondPage } from "./pages/SecondPage";
import { ThirdPage } from "./pages/ThirdPage";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <MainPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
