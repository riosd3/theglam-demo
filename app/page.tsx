import AboutUs from "./components/shared/AboutUs";
import Hero from "./components/shared/Hero";
import Services from "./components/shared/Showcase";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <Services />
    </div>
  );
}
