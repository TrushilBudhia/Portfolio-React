import React, { useState } from 'react';
// import { useInput } from '../../hooks/useInput;  
import { AiOutlineMail } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import '../../styles/Contact.css';

export default function Contact() {
    // Using the useState hook to create the variables and supporting functions that can be used to change the state of the variable
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    // Handles what happens when the input field value changes
    // Whenever the value prop of an input is set to a variable, you have a Controlled Component
    // This function allows for the value of the input field to change and not be set to always hold the value set
    const handleChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    // Handles what happens on form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        setValid(false);
        if (values.name && values.email && values.message) {
            // sets valid to true if all the input fields are valid
            // Valid being true allows the success message to be displayed
            setValid(true);
        }
        // Sets submitted to true
        // Will display any error spans if there are input fields that do not have a value
        setSubmitted(true);
    }

    return (
        <section id="contact">
            <article className="form-container">
                <h1 className=" has-text-white is-size-3 my-3">Contact</h1>
                <form className="contact-form column is-four-fifths" onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label has-text-white is-size-5">Name</label>
                        <div className="control has-icons-left">
                            <input
                                className="name input"
                                id="name"
                                type="text"
                                placeholder="Email Name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                            <span className="icon is-small is-left">
                                {/* // Using the React Icons component to display the specified icon */}
                                <FaUser />
                            </span>
                            {/* // Error message will be displayed when submitted is true and there is no value in the input field */}
                            {submitted && !values.name && <span id="name-error" className="has-text-danger my-4 is-block">*Please enter a valid name</span>}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white is-size-5">Email</label>
                        <div className="control has-icons-left">
                            <input
                                className="email input"
                                id="email" type="email"
                                placeholder="Enter Email"
                                name="email"
                                value={values.email}
                                onChange={handleChange} />
                            <span className="icon is-small is-left">
                                <AiOutlineMail />
                            </span>
                            {/* // Error message will be displayed when submitted is true and there is no value in the input field */}
                            {submitted && !values.email && <span id="email-error" className="has-text-danger my-4 is-block">*Please enter a valid email</span>}
                        </div>
                    </div>

                    <div className="field">
                        <label className="label has-text-white is-size-5">Message</label>
                        <div className="control">
                            <textarea
                                className="message textarea"
                                placeholder="Enter Message"
                                name="message"
                                onChange={handleChange}
                                value={values.message} >
                            </textarea>
                            {/* // Error message will be displayed when submitted is true and there is no value in the input field */}
                            {submitted && !values.message && <span id="message-error" className="has-text-danger my-4 is-block">*Please enter a message</span>}
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link px-6" type="Submit">Submit</button>
                        </div>
                    </div>
                    {/* // Success message will display when the vaid value is true which happens when the form is submitted and all the input fields have valid values */}
                    {valid && <div className="success-message notification is-success my-4 is-block">
                        <p>Message Sent</p>
                    </div>}
                </form>
            </article>
        </section>
    );
}