import EnterPage from "../Components/EnterPage";
import "../../style/index.scss";
// import NavBar from "../Components/NavBar";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Form from "../Components/Form";
import Pacman from "../Components/Pacman/Pacman";

function App() {
  return (
    <div className="App">
      <Pacman />
      <EnterPage />
      {/* <NavBar /> */}
      <About />
      <Projects />
      <Form />
    </div>
  );
}

export default App;
