import React from "react";
import ProgressBar from "./ProgressBar";

function TechincalSkills() {
    return (
        <section id="technical-skills">
            <div className="skills-layout">
                <div className="front-end-skls">
                    <h4 className="skill-header">Front End Development</h4>
                    <link href='https://css.gg/code-slash.css' rel='stylesheet'></link>
                    <ul className="skills-lst">
                        <li>HTML</li>
                        <ProgressBar percentage={100} />
                        <li>CSS</li>
                        <ProgressBar percentage={70} />
                        <li>JavaScript</li>
                        <ProgressBar percentage={80} />
                        <li>React</li>
                        <ProgressBar percentage={70} />
                    </ul>
                </div>
                <div className="back-end-skls">
                    <h4 className="skill-header">Back End Development</h4>
                    <ul className="skills-lst">
                        <li>JavaScript</li>
                        <ProgressBar percentage={80} />
                        <li>Node.Js</li>
                        <ProgressBar percentage={60} />
                        <li>Java</li>
                        <ProgressBar percentage={100} />
                    </ul>
                </div>
                <div className="auto-test-skls">
                    <h4 className="skill-header">Automation Testing</h4>
                    <ul className="skills-lst">
                        <li>Selenium</li>
                        <ProgressBar percentage={100} />
                        <li>Cucumber</li>
                        <ProgressBar percentage={100} />
                        <li>TestNg</li>
                        <ProgressBar percentage={80} />
                        <li>Java</li>
                        <ProgressBar percentage={100} />
                        <li>JavaScript</li>
                        <ProgressBar percentage={80} />
                        <li>Karate</li>
                        <ProgressBar percentage={70} />
                        <li>RestAssured Api Testing</li>
                        <ProgressBar percentage={80} />
                        <li>SQL</li>
                        <ProgressBar percentage={80} />
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TechincalSkills;