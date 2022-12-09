import Todo from "./components/Todo";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Card3 from "./components/Quiz";
import Countdown from "./CountDown/CountDown";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Todo />
      <Card3 />
      <Countdown />
      <Contact />
    </div>
  );
}

export default App;
