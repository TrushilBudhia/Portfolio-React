import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import '../../styles/Resume.css';

export default function Resume() {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <article id="document-info">
                <a href="../../assets/documents/Trushil-Budhia-Resume.pdf" target="_blank" rel="noreferrer" className="document-link">
                    <FontAwesomeIcon icon={faAddressCard} />
                    {` Download my resume`}
                </a>
                <hr className="horizontal-line" />
                <article className="skills">
                    <h3 className="is-size-3 has-text-white">Proficiencies</h3>
                    <article className="list">
                        <article className="front-end is-block">
                            <h4 className="is-size-3 has-text-white">Front-End</h4>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Responsive Design</li>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                                <li>Bulma</li>
                                <li>CSS3</li>
                                <li>HTML5</li>
                            </ul>
                        </article>
                        <article className="back-end is-block">
                            <h4 className="is-size-3 has-text-white">Back-End</h4>
                            <ul>
                                <li>APIs</li>
                                <li>PHP</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL, Sequelize</li>
                                <li>MongoDB, Mongoose</li>
                                <li>REST</li>
                                <li>GraphQL</li>
                            </ul>
                        </article>
                    </article>
                </article>
            </article>
        </section>
    )
}