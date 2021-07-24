import React from 'react';
import '../styles/Navigation.css'
import '../styles/style.css'

// The NavigationBar function builds the navigation
// The currentPage and handlePageChange are passed as parameters
export default function NavigationBar({ currentPage, handlePageChange }) {
    return (
        <nav id="navbar">
            <h1>Trushil | Portfolio</h1>
            <ul id="nav-list">
                <li>
                    <a
                        href="#about"
                        // onClick event is attached to the link. When clicked the handlePageChange is registered with the parameter specifed in the parathesis
                        onClick={() => handlePageChange('About')}
                        // Ternary operator is used to check if the currentPage is equal to the string value, if it is, the className has the value 'nav-link active'.
                        // Otherwise, the value of className is 'nav-link'
                        // Each class name has a different styling attached to it
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        // The ternary operator is checking if the currentPage is strictly equal to specificed string value
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        // The ternary operator is checking if the currentPage is strictly equal to specificed string value
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        // The ternary operator is checking if the currentPage is strictly equal to specificed string value
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}
