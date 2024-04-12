
import { Hero } from "./Components/Hero";
import { Highlights } from "./Components/Highlights";
import { Navbar } from "./Components/Navbar";
import { MyRef } from "./Components/MyRef";
import Model from "./Components/Model";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model/>
      {/* <MyRef/> */}
    </main>
  );
};

export default App;
