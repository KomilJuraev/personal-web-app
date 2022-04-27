import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import TechincalSkills from "./TechnicalSkills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
    return (
        <div id="parent-div" className="parent-div">
            <NavBar />
            <Header />
            <About />
            <TechincalSkills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;