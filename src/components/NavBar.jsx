import React, { useState } from "react";
// , { useState, useEffect } 
// import { debounce } from "./Helpers";

function NavBar() {
    const [visible, setVisible] = useState(false);

    // const navBar = document.querySelectorAll(".nav-area");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            if (window.scrollY <= 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        } else {
            setVisible(false);
        }
        lastScrollY = window.scrollY;
    })

    return (
        <nav className={visible ? "nav-area nav-hidden" : "nav-area"}>
            <ul className="nav-links">
                <li><a className="nav-lst" href="#header">Home</a></li>
                <li><a className="nav-lst" href="#about-me">About</a></li>
                <li><a className="nav-lst" href="#technical-skills">Skills</a></li>
                <li><a className="nav-lst" href="#project-section">Portfolio</a></li>
                <li><a className="nav-lst" href="#contact-me">Contact</a></li>
            </ul>
        </nav >
    )
}

export default NavBar;