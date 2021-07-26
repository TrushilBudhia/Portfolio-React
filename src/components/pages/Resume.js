import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { SiReact, SiRedux, SiJavascript, SiWordpress, SiJquery, SiBootstrap, SiTailwindcss, SiBulma, SiCss3, SiHtml5, SiPhp, SiLaravel, SiNodeDotJs, SiMysql, SiMongodb, SiGraphql, SiAdobephotoshop, SiXampp, SiWebpack, SiGithub, SiHeroku, SiPostman } from "react-icons/si";
import ResumeDocument from '../../assets/documents/Trushil-Budhia-Resume.pdf'
import '../../styles/Resume.css';

export default function Resume() {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <article id="document-info">
                <a href={ResumeDocument} target="_blank" rel="noreferrer" className="document-link">
                    <FontAwesomeIcon icon={faAddressCard} />
                    {` Download my resume`}
                </a>
                <hr className="horizontal-line" />
                <article className="skills">
                    <h3 className="is-size-3 has-text-white">Proficiencies</h3>
                    <article className="list columns is-12 is-flex-wrap-wrap">
                        <article className="front-end is-block columns is-half mx-3 my-3">
                            <h4 className="is-size-3 has-text-white my-3">Front-End</h4>
                            <div className="is-size-1 has-text-white">
                            <SiReact className="mx-2" />
                            <SiRedux className="mx-2" />
                            <SiJavascript className="mx-2" />
                            <SiWordpress className="mx-2" />
                            <SiJquery className="mx-2" />
                            <br />
                            <SiBootstrap className="mx-2" />
                            <SiTailwindcss className="mx-2" />
                            <SiBulma className="mx-2" />
                            <SiCss3 className="mx-2" />
                            <SiHtml5 className="mx-2" />
                            <br />

                            </div>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>JavaScript</li>
                                <li>WordPress</li>
                                <li>jQuery</li>
                                <li>Responsive Design</li>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                                <li>Bulma</li>
                                <li>CSS3</li>
                                <li>HTML5</li>
                            </ul>
                        </article>
                        <article className="back-end is-block columns mx-3 my-3">
                            <h4 className="is-size-3 has-text-white my-3">Back-End</h4>
                            <div className="is-size-1 has-text-white">
                            <SiPhp className="mx-2" />
                            <SiLaravel className="mx-2" />
                            <SiNodeDotJs className="mx-2" />
                            <SiMysql className="mx-2" />
                            <SiMongodb className="mx-2" />
                            <br />
                            <SiGraphql className="mx-2" />
                            </div>
                            <ul>
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>APIs</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL, Sequelize</li>
                                <li>MongoDB, Mongoose</li>
                                <li>REST</li>
                                <li>GraphQL</li>
                            </ul>
                        </article>
                        <article className="other is-block columns is-half mx-3 my-3">
                            <h4 className="is-size-3 has-text-white my-3">Other</h4>
                            <div className="is-size-1 has-text-white">
                            <SiAdobephotoshop className="mx-2" />
                            <SiXampp className="mx-2" />
                            <SiWebpack className="mx-2" />
                            <SiGithub className="mx-2" />
                            <SiHeroku className="mx-2" />
                            <br />
                            <SiPostman className="mx-2" />
                            </div>
                            <ul>
                                <li>Photoshop</li>
                                <li>XAMPP</li>
                                <li>Webpack</li>
                                <li>GitHub</li>
                                <li>Heroku</li>
                                <li>Postman</li>
                            </ul>
                        </article>
                    </article>
                </article>
            </article>
        </section>
    )
}