import React from "react";
import "./Contact.css";
import emailIcon from "../../assets/email.png";
import contactAnimation from '../../assets/animations/contact.json'
import Lottie from "lottie-react";
import { useForm, ValidationError } from '@formspree/react';


function Contact() {


  const [state, handleSubmit] = useForm("xayrazed");
  return (
    <section className="contact" id="contact">
      <h1 className="title">
        <img className="emailIcon" src={emailIcon} />
        Contact Us
      </h1>
      <p className="sub-title"> contact us for more informations</p>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input required id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

          </div>

          <div className="flex" style={{ marginTop: "25px" }}>
            <label htmlFor="message">Your message</label>
            <textarea required id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

          </div>

          <button type="submit" className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting" : "Submit"}
          </button>

            {state.succeeded && (<p style={{ fontSize: "18px", marginTop: "2rem", color: "#28a745"}}>Your message has been sent successfuly!</p>)}


        </form>
        <div className="animation">
          <Lottie className='contact-animation'
            animationData={contactAnimation} />
        </div>
      </div>
    </section>
  );
}
export default Contact;

