import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Company from "./components/company/Company";
import Residencies from "./components/residencies/Residencies";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import GetStart from "./components/getStarted/GetStart";
import Footer from "./components/footer/Footer";
import CopyRight from "./components/copyright/CopyRight";

function App() {
  return (
    <>
      <div className="App">
        <div className="backgroundBlur" >
          <div className="white-gradiant"/>
        <Header />
        <Hero />
        
        </div>
        <Company/>
        <Residencies/>
        <Value/>
        <Contact/>
        <GetStart/>
        <Footer/>
        <CopyRight/>
        

      </div>
    </>
  );
}

export default App;
