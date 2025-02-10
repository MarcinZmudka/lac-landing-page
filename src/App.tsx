import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { Explanations } from "./components/Explanation";
import { Usage } from "./components/Usage";
import { PackageManagers } from "./components/PackageManagers";
import { Parameters } from "./components/Parameters";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Explanations />
      <Usage />
      <Parameters />
      <PackageManagers />
      <About />
      <ScrollToTop />
    </>
  );
}

export default App;
