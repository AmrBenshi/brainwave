import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pircing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      {/* pt-[4.75rem] lg:pt-[5.25rem]  */}
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
