import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  function checkForBlank() {
    if (document.getElementById("firstName").value === "") {
      <p>Please enter your first name</p>
      return false;
    }
  }

  const [state, handleSubmit] = useForm("myyonrap");
  if (state.succeeded) {
    return <div id="status" className="success"><h2>Thanks for Emailing!</h2></div>
  }
  return (
    <form method="POST" onSubmit={handleSubmit} >
      <fieldset id="fs-frm-inputs">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required></input>
          <ValidationError prefix="firstName" field="firstName" errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required></input>
          <ValidationError prefix="firstName" field="lastName" errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required></input>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
      </fieldset>
      <button type="submit" onClick={checkForBlank} disabled={state.submitting}>
        Submit
      </button>

    </form>
  );
}

export default ContactForm;

