import AboutUs from "./components/shared/AboutUs";
import Hero from "./components/shared/Hero";
import Showcase from "./components/shared/Showcase";
import Services from "./components/shared/Services";
import FooterCTA from "./components/shared/FooterCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <AboutUs />
      <Showcase />
      <FooterCTA />
    </div>
  );
}
