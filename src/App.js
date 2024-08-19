import React from "react";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import AboutMe from "./pages/AboutMe.js";
import Skills from "./pages/Skills.js";
import Project from "./pages/Projects.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
