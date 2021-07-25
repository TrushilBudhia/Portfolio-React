import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <p>© Created by Trushil</p>
            <a href="https://github.com/TrushilBudhia/" target="_blank" rel="noreferrer" className="footer-link has-text-white mx-3">
                {/* Using the FontAwesomeIcon component imported to display the specified icon */}
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/trushilbudhia/" target="_blank" rel="noreferrer" className="footer-link has-text-white mr-3">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </footer>
    );
}