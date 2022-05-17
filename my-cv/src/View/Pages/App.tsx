// import React, { useEffect, useState } from "react";
// import Alert from "react-bootstrap/Alert";
import EnterPage from "../Components/EnterPage";
import "../../style/index.scss";
import NavBar from "../Components/NavBar";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Form from "../Components/Form";

function App() {
  return (
    <div className="App">
      <EnterPage />
      <NavBar />
      <About />
      <Projects />
      <Form />
    </div>
  );
}

export default App;
