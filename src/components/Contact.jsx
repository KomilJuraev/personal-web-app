import React from "react";
import ContactForm from "./ContactForm";
// import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    // const [state, handleSubmit] = useForm("my-form");

    // if (state.succeeded) {
    //     return <h3>Thanks!</h3>
    // }

    return (
        <section id="contact-me">
            <div className="contact-info-sec">
                <div className="contact-info">
                    <h2 className="contact-info-itms">Let's talk business</h2>
                    <p className="contact-info-itms">Feel free to reach out to me if you are interested to work with me. I will email my resume if requested.</p>
                    <h3 className="contact-info-itms">Contact Info</h3>
                    <h4 className="contact-info-itms">📲 443-825-0413</h4>
                    <h4 className="contact-info-itms">📧 K.juraev1994@gmail.com</h4>
                    <div class="gmap_canvas">
                        <iframe width="400" height="400" src="https://maps.google.com/maps?q=Owings%20Mills&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
                    </div>
                </div>
            </div>
            <div className="email-box-sec">
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact;