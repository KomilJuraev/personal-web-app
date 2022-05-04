import React from "react";

function Portfolio() {
    return (
        <section id="project-section">
            <h2>Section is under development.</h2>
            <div className="projects">
                <div className="personal-portfolio-1">
                    <h4>Personal WebSite</h4>
                    <img id="personal-web-img" src="./images/Screenshot 2022-04-27 174236.png" alt="" />
                    <br />
                    <a className="personal-website" href="https://github.com/KomilJuraev/personal-web-app/tree/main"><button type="button" class="btn btn-outline-primary" >github repo</button></a>
                    <br />
                    <a className="navigate-to-project" href="#header"><button type="button" class="btn btn-outline-primary" >Navigate to Project</button></a>
                </div>
                <div className="personal-portfolio-2"></div>
            </div>
        </section >
    )
}

export default Portfolio;
