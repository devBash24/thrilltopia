import About from "./components/sections/about";
import Header from "./components/sections/header";
import Contact from "./components/sections/contact";
import Promotions from "./components/sections/promotions";
import Footer from "./components/sections/footer";
import Hero from "./components/sections/hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <About />
      <Promotions />
      <Contact />
      <Footer />
    </div>
  );
}
