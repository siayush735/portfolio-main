import Hero from "./component/hero";
import Services from "./component/services";
import Project from "./component/project";

import Cta from "./component/cta";
import Footer from "./component/footer";
import "./App.css";
import Contact from "./component/contact";

function App() {
  return (
    <>
      <Hero />
      <Cta />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
