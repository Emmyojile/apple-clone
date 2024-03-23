
import { Hero } from "./Components/Hero";
import { Highlights } from "./Components/Highlights";
import { Navbar } from "./Components/Navbar";
Hero;
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
};

export default App;
