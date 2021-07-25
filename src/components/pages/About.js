// Importing the files, variables, functions and components to use
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../../styles/About.css'
import Photo from '../../assets/images/Photo.jpg'

// A function to display the About section of the webpage - a paragraph about myself, a photo and links to my github, linkedin profiles
export default function About() {
    return (
        <section id="about-me-section">
            <h2>About Me</h2>
            <p>Hi I am Trushil. A web developer who enjoys learning about advances in development technologies and building user friendly applications. I am based in Perth, Australia</p>
            <a href="https://github.com/TrushilBudhia/" target="_blank" rel="noreferrer">
                <img className="photo" src={Photo} alt="Trushil Profile" width="100" height="50" />
            </a>

            <article id="contact-links">
                <a href="https://github.com/TrushilBudhia/" target="_blank" rel="noreferrer" className="btn contact-details">
                    {/* Using the FontAwesomeIcon component imported to display the specified icon */}
                    <FontAwesomeIcon icon={faGithub} />
                    {` GitHub`}
                </a>
                <a href="https://www.linkedin.com/in/trushilbudhia/" target="_blank" rel="noreferrer" className="btn contact-details">
                    <FontAwesomeIcon icon={faLinkedin} />
                    {` Linkedin`}
                </a>
                <a href="mailto:trushil.budhia@gmail.com" target="_blank" rel="noreferrer" className="btn contact-details">
                    <FontAwesomeIcon icon={faAt} />
                    {` Send an email`}
                </a>
                <a href="./assets/documents/Trushil-Budhia-Resume.pdf" target="_blank" rel="noreferrer" className="btn contact-details">
                    <FontAwesomeIcon icon={faAddressCard} />
                    {` Resume`}
                </a>
            </article>
        </section>
    );
}
