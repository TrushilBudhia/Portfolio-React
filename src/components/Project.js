import React from 'react';
import '../styles/Project.css';

// This function builds the project card that will be used in the Portfolio.js file
// Each project takes the parameters: siteLink, image, imageDescription, summary, title, technologies, repoLink
export default function Project({ siteLink, image, imageDescription, summary, title, technologies, repoLink }) {
    return (
        <article className="column is-one-third">
            <div className="project-work">
                <a href={siteLink} target="_blank" rel="noreferrer">
                    <div className="image-container">
                        <img className="project-image" src={image} alt={imageDescription} />
                        <div className="image-overlay">
                            <div className="image-text">
                                <h3>Summary</h3>
                                <p>{summary}</p>
                            </div>
                        </div>
                    </div>
                    <p className="project-work-paragraph">
                        <span className="title has-text-white has-text-weight-normal is-size-4 mb-0">{title}</span><br />
                        <span className="subtitle has-text-white is-6 "><em>{technologies}</em></span>
                    </p>

                </a>
                <a href={repoLink} className="project-repository">Repository</a>
            </div>
        </article>
    );
}