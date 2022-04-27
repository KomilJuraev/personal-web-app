import React from "react";
import TypeWriter from "typewriter-effect";

/* let typed = new Typed(".auto-input", {
    strings: ["Komil Juraev", "Web Developer", "Automation Tester"],
    typeSpeed:100,
    backSpeed:100,
    loop: true
}); */

function Header() {
    // <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>   

    return (
        <section id="header">
            <div className="header-txt">
                <span>I'm </span>
                <TypeWriter
                    options={{
                        strings: ['Komil Juraev', 'Web Developer and Automation Tester'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </section>
    )
}

export default Header;