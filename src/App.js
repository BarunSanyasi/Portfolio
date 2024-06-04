import React from "react";
import "./index.css";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Project/Project";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
