import React from 'react';
import { SiGithub, SiLinkedin, SiBehance } from "react-icons/si";
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <p>© Created by Trushil</p>
            <a href="https://github.com/TrushilBudhia/" target="_blank" rel="noreferrer" className="footer-link has-text-white mx-3">
                {/* Using the React Icons component which was imported to display the specified icon */}
                <SiGithub className="is-size-4" />
            </a>
            <a href="https://www.linkedin.com/in/trushilbudhia/" target="_blank" rel="noreferrer" className="footer-link has-text-white mr-3">
                <SiLinkedin className="is-size-4" />
            </a>
            <a href="https://www.behance.net/trushilbud4f3f" target="_blank" rel="noreferrer" className="footer-link has-text-white mr-3">
                <SiBehance className="is-size-4" />
            </a>
        </footer>
    );
}