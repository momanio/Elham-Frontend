/* eslint-disable no-unused-vars */

import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Process from "./pages/Process";

function App() {
  return (
    <div className="bg-black flex flex-col">
      <Home />
      <Process />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
