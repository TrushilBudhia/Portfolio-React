import React from 'react';
import NavigationBar from './Navigation';
import '../styles/style.css'
import '../styles/Header.css';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            {/* // The props of NavigationBar are currentPage with a value of {currentPage} and handlePageChange with a value of {handlePageChange} function */}
            <NavigationBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* // Adding subtitle text to the Header */}
            <section id="subtitle-text">
                <h3>Design. Functionality. Development</h3>
            </section>
        </header>
    );
}

