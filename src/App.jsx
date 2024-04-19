/* eslint-disable no-unused-vars */
import Home from "./pages/Home";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import NavBar from "./navigation/NavBar";
function App() {
  return (
    <main className="bg-black">
      <Home />
      <Process />
      <Services />
      <Contact />
      <NavBar />
    </main>
  );
}

export default App;
