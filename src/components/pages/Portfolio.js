import React from 'react';
import Project from '../Project.js'
import '../../styles/style.css'
import '../../styles/Project.css';
import EaseeAppointmentTrackerImg from '../../assets/images/Easee-Appointment-Tracker-2-img-1.jpg'
import TechBlogImg from '../../assets/images/Tech-Blog-img-1.jpg'
import EmployeeManagementSystemImg from '../../assets/images/Employee-Management-System-img-1.jpg'
import NoteTakerImg from '../../assets/images/Note-Taker-img-1.jpg'

// This function builds the Portfolio section of the website - render each of the projects
export default function Portfolio() {
    return (
        <main id="projects">
            <h2 className="projects-section-header">Work</h2>
            <h3 className="projects-section-header">These are some of my projects</h3>
            <article className="projects-container">
                <article className="columns is-12 is-flex-wrap-wrap">
                    {/* // Building the projects by using the Project syntax and passing the parameters with the specfic projects values */}
                    <Project 
                        siteLink="https://afternoon-beyond-55572.herokuapp.com/" 
                        image={EaseeAppointmentTrackerImg} 
                        description="Easee Appointment Tracker preview"
                        title="Easee Appointment Tracker"
                        technologies="Node.js / MySQL / Express / Sequelize / Javascript / Bulma CSS / Google Places API"
                        repoLink="https://github.com/ShaneCurtis84/Easy-Appointment-Tracker-2.0"
                    />
                    <Project 
                        siteLink="https://lets-get-technucated.herokuapp.com/" 
                        image={TechBlogImg} 
                        description="Lets Get Technucated preview"
                        title="Tech Blog"
                        technologies="Node.js / MySQL / Express / Sequelize / Javascript"
                        repoLink="https://github.com/TrushilBudhia/Tech-Blog"
                    />
                    <Project 
                        siteLink="https://github.com/TrushilBudhia/Employee-Management-System#assets" 
                        image={EmployeeManagementSystemImg} 
                        description="Employment Management System preview"
                        title="Employment Management System"
                        technologies="Node.js / MySQL / Inquirer / Javascript"
                        repoLink="https://github.com/TrushilBudhia/Employee-Management-System"
                    />
                    <Project 
                        siteLink="https://still-dusk-03326.herokuapp.com/" 
                        image={NoteTakerImg} 
                        description="Note Taker preview"
                        title="Note Taker"
                        technologies="Node.js / Express / Javascript"
                        repoLink="https://github.com/TrushilBudhia/Note-Taker"
                    />
                </article>
            </article>
        </main>
    );
}