/* eslint-disable no-unused-vars */

import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Process from "./pages/Process";
import NavBar from "./navigation/NavBar";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Home />
      <Process />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;
