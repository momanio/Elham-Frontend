/* eslint-disable no-unused-vars */

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

      <Contact />
    </div>
  );
}

export default App;
