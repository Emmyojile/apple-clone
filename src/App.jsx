
import { Hero } from "./Components/Hero";
import { Highlights } from "./Components/Highlights";
import { Navbar } from "./Components/Navbar";
import { MyRef } from "./Components/MyRef";

const App = () => {
  return (
    <main className="bg-gray-700">
      <Navbar />
      <Hero />
      <Highlights />
      {/* <MyRef/> */}
    </main>
  );
};

export default App;
