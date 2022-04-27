import React from "react";

function About() {
    return (
        <section id="about-me">
            <div className="content-sec">
                <div className="intro-txt">
                    <h3 className="about-me-hdr">Hi, I'm Komil. Welcome to my WebSite.</h3>
                    <p className="about-me-paragraph">
                        Since the first time I stepped into the coding classroom, I felt passionate about coding.
                        I have been honing my skills by working in the industry and by continuously self educating
                        myself ever since. Throughout my journy, I gained a lots of experience working with talanted teams
                        and working indivudually. Thanks to all the work I went through, today I am capable full-stack web developer
                        and automation tester.
                    </p>
                </div>
            </div>
            <div className="img-sec">
                <img className="profile-pic" src="images/cropped.jpg" alt="profile-pic"></img>
            </div>
        </section>
    )
}

export default About;

