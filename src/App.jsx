import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import MainContent from "./component/MainContent/MainContent";
import ContactUs from "./component/ContactUs/ContactUs";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <div className="container ">
        <Header />
        <Hero />
        <div className="divider" />

        <MainContent />
        <div className="divider" />

        <ContactUs />
        <div className="divider" />

        <Footer />
      </div>
    </>
  );
}

export default App;
