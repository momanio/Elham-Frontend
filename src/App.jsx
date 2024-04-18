/* eslint-disable no-unused-vars */
import Home from "./pages/Home";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
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
