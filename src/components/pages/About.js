import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/About.css'
import '../../styles/style.css'
import 'bulma/css/bulma.css'
import Photo from '../../assets/images/Photo.jpg'

export default function About() {
  return (
    <section id="about-me-section">
        <h2 className="is-size-2">About Me</h2>
        <p>Hi I am Trushil. A web developer who enjoys learning about advances in development technologies and building user friendly applications. I am based in Perth, Australia</p>
        <div>Image<img className="photo" src={Photo} alt="Trushil Profile" /></div>

        <article id="contact-links">
            <a href="https://github.com/TrushilBudhia/" target="_blank" rel="noreferrer" className="btn contact-details">
                <FontAwesomeIcon icon={['fab', 'github']} />
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/trushilbudhia/" target="_blank" rel="noreferrer" className="btn contact-details">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                Linkedin
            </a>
            <a href="mailto:trushil.budhia@gmail.com" target="_blank" rel="noreferrer" className="btn contact-details">
                <FontAwesomeIcon icon={['fas', 'at']} />
                Send an email
            </a>
            <a href="./assets/documents/Trushil-Budhia-Resume.pdf" target="_blank" rel="noreferrer" className="btn contact-details">
                <FontAwesomeIcon icon={['fas', 'address-card']} />
                Resume
            </a>
        </article>
    </section>
  );
}
