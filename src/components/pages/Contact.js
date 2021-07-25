import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import '../../styles/Contact.css';

const numberOfElementsShown = async (elementSelect, numberOfElements) => {
    if (elementSelect.length > numberOfElements) {
        for (let i = 0; i < elementSelect.length - numberOfElements; i++) {
            elementSelect[i].remove();
        }
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const nameSelect = document.querySelector('.name').value.trim();
    const emailSelect = document.querySelector('.email').value.trim();
    const messageSelect = document.querySelector('.message').value.trim();
    const inputSelect = document.querySelectorAll('.input');
    const textAreaSelect = document.querySelector('.textarea');
    const successMessageSection = document.querySelector('.success-message');
    successMessageSection.setAttribute('class', 'success-message notification is-success my-4 is-hidden');

    const errorMessage = document.querySelector(".error");
    numberOfElementsShown(errorMessage, 0);
    let errorMessageListItem;
    if (!nameSelect) {
        errorMessageListItem ? errorMessageListItem = errorMessageListItem + `<li>• Name</li>` : errorMessageListItem = `<li>• Name</li>`;
    }
    if (!emailSelect) {
        errorMessageListItem ? errorMessageListItem = errorMessageListItem + `<li>• Email</li>` : errorMessageListItem = `<li>• Email</li>`;
    }
    if (!messageSelect) {
        errorMessageListItem ? errorMessageListItem = errorMessageListItem + `<li>• Message</li>` : errorMessageListItem = `<li>• Message</li>`;
    }
    console.log('errorMessageListItem', errorMessageListItem);

    const errorMessageSection = document.querySelector('.error-message');
    errorMessageSection.setAttribute('class', 'error-message notification is-danger my-4 is-block');
    errorMessage.innerHTML = errorMessageListItem;
    if (nameSelect && emailSelect && messageSelect) {
        console.log('all fields have text');
        inputSelect.forEach((item) => {
            item.value = '';
        })
        textAreaSelect.value = '';
        errorMessageSection.setAttribute('class', 'error-message is-hidden');
        successMessageSection.setAttribute('class', 'success-message notification has-text-black is-success my-4 is-block');
    }
}

export default function Contact() {
    return (
        <section id="contact">
            <article className="form-container">
                <h1 className="has-text-white is-size-3 my-3">Contact</h1>
                <form className="contact-form">
                    <div className="field">
                        <label className="label has-text-white is-size-5">Name</label>
                        <div className="control has-icons-left">
                            <input className="name input" type="text" placeholder="Email Name" />
                            <span className="icon is-small is-left">
                                <FaUser />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white is-size-5">Email</label>
                        <div className="control has-icons-left">
                            <input className="email input" type="email" placeholder="Enter Email" />
                            <span className="icon is-small is-left">
                                <AiOutlineMail />
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label has-text-white is-size-5">Message</label>
                        <div className="control">
                            <textarea className="message textarea" placeholder="Enter Message"></textarea>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link px-6" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                    <div className="error-message notification is-danger my-4 is-hidden">
                        Enter details for:
                        <ul className="error"></ul>
                    </div>
                    <div className="success-message notification is-success my-4 is-hidden">
                        <p>Message Sent</p>
                    </div>
                </form>
            </article>
        </section>
    );
}