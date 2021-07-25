import React from 'react';
import '../styles/Project.css';

// This function builds the project card that will be used in the Portfolio.js file
// Each project takes the parameters: siteLink, image, description, title, technologies, repoLink
export default function Project({ siteLink, image, description, title, technologies, repoLink }) {
    return (
        <article className="column is-one-third">
            <div className="project-work">
                <a href={siteLink} target="_blank" rel="noreferrer">
                    <img className="project-image" src={image} alt={description} />
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