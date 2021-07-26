import React from 'react';
import Project from '../Project.js'
import '../../styles/Project.css';
import EaseeAppointmentTrackerImg from '../../assets/images/Easee-Appointment-Tracker-2-img-1.jpg'
// import BudgetTrackerPwaImg from '../../assets/images/Budget-Tracker-PWA-img-1.jpg'
import FitnessTrackerImg from '../../assets/images/Fitness-Tracker-img-1.jpg'
// import TechBlogImg from '../../assets/images/Tech-Blog-img-1.jpg'
// import EmployeeManagementSystemImg from '../../assets/images/Employee-Management-System-img-1.jpg'
// import NoteTakerImg from '../../assets/images/Note-Taker-img-1.jpg'
import TeamProfileGeneratorImg from '../../assets/images/Team-Profile-Generator-img-1.jpg'
// import WeatherDashboardImg from '../../assets/images/Weather-Dashboard-img-1.jpg'
import CodeQuizImg from '../../assets/images/Code-Quiz-img-1.jpg'
// import WorkDaySchedulerImg from '../../assets/images/Work-Day-Scheduler-img-1.jpg'
import FlipCardImg from '../../assets/images/Flip-Card-img-1.jpg'
import AutotyperImg from '../../assets/images/Autotyper-img-1.jpg'
import BudgetTrackerPwaAnimatedImg from '../../assets/images/Budget-Tracker-PWA-img-2.gif'
import TechBlogAnimatedImg from '../../assets/images/Tech-Blog-img-2.gif'
import EmployeeManagementSystemAnimatedImg from '../../assets/images/Employee-Management-System-img-3.gif'
import NoteTakerAnimatedImg from '../../assets/images/Note-Taker-img-2.gif'
import WeatherDashboardAnimatedImg from '../../assets/images/Weather-Dashboard-img-2.gif'
import WorkDaySchedulerAnimatedImg from '../../assets/images/Work-Day-Scheduler-img-2.gif'

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
                        imageDescription="Easee Appointment Tracker preview"
                        summary="A simple and quick way to add and modify appointments to track and to search across those appointments"
                        title="Easee Appointment Tracker"
                        technologies="Node.js / MySQL / Express / Sequelize / JavaScript / Bulma CSS / Google Places API"
                        repoLink="https://github.com/ShaneCurtis84/Easy-Appointment-Tracker-2.0"
                    />
                    <Project 
                        siteLink="https://budget-tracker-pwa-plus.herokuapp.com/" 
                        image={BudgetTrackerPwaAnimatedImg} 
                        imageDescription="Budget Tracker PWA preview"
                        summary="An application that allows a user to add expenses and deposits to their budget with or without a connection"
                        title="Budget Tracker (PWA)"
                        technologies="Node.js / MongoDB / Mongoose / Express / IndexedDB / JavaScript"
                        repoLink="https://github.com/TrushilBudhia/Budget-Tracker-PWA"
                    />
                    <Project 
                        siteLink="https://fitness-tracker-plus.herokuapp.com/" 
                        image={FitnessTrackerImg} 
                        imageDescription="Fitness Tracker preview"
                        summary="An application where you can view, create and track daily workouts"
                        title="Fitness Tracker"
                        technologies="Node.js / MongoDB / Mongoose / Express / JavaScript"
                        repoLink="https://github.com/TrushilBudhia/Fitness-Tracker"
                    />
                    <Project 
                        siteLink="https://lets-get-technucated.herokuapp.com/" 
                        image={TechBlogAnimatedImg} 
                        imageDescription="Lets Get Technucated preview"
                        summary="A blog website that allows users to publish and modify posts and comment on other posts"
                        title="Tech Blog"
                        technologies="Node.js / MySQL / Express / Sequelize / JavaScript"
                        repoLink="https://github.com/TrushilBudhia/Tech-Blog"
                    />
                    <Project 
                        siteLink="https://github.com/TrushilBudhia/Employee-Management-System#assets" 
                        image={EmployeeManagementSystemAnimatedImg} 
                        imageDescription="Employment Management System preview"
                        summary="An application to manage the departments, employees and roles within a company"
                        title="Employment Management System"
                        technologies="Node.js / MySQL / Inquirer / JavaScript"
                        repoLink="https://github.com/TrushilBudhia/Employee-Management-System"
                    />
                    <Project 
                        siteLink="https://still-dusk-03326.herokuapp.com/" 
                        image={NoteTakerAnimatedImg} 
                        imageDescription="Note Taker preview"
                        summary="An application that allows the user to record notes and to delete the notes they create"
                        title="Note Taker"
                        technologies="Node.js / Express / JavaScript"
                        repoLink="https://github.com/TrushilBudhia/Note-Taker"
                    />
                    <Project 
                        siteLink="https://still-dusk-03326.herokuapp.com/" 
                        image={TeamProfileGeneratorImg} 
                        imageDescription="Team Profile Generator preview"
                        summary="An application that will dynamically generate a Team Profile HTML webpage for a software engineering team that displays summaries for each team member"
                        title="Team Profile Generator"
                        technologies="Node.js / Jest / Inquirer / JavaScript / Tailwind CSS"
                        repoLink="https://github.com/TrushilBudhia/Team-Profile-Generator"
                    />

                    <Project 
                        siteLink="https://trushilbudhia.github.io/Weather-Dashboard/" 
                        image={WeatherDashboardAnimatedImg} 
                        imageDescription="Weather Dashboard preview"
                        summary="A weather dashboard that can retrieve weather data for the city inputted by the user - current day and five day forecast"
                        title="Weather Dashboard"
                        technologies="JavaScript / Bulma CSS / Google Places API"
                        repoLink="https://github.com/TrushilBudhia/Weather-Dashboard"
                    />
                    <Project 
                        siteLink="https://trushilbudhia.github.io/Code-Quiz/" 
                        image={CodeQuizImg} 
                        imageDescription="Code Quiz preview"
                        summary="A timed multiple choice quiz on Javascript fundamentals. Scores can be saved at the end of the quiz to a highscore table"
                        title="Code Quiz"
                        technologies="JavaScript / HTML / CSS"
                        repoLink="https://github.com/TrushilBudhia/Code-Quiz"
                    />
                    <Project 
                        siteLink="https://trushilbudhia.github.io/Work-Day-Scheduler/" 
                        image={WorkDaySchedulerAnimatedImg} 
                        imageDescription="Work Day Scheduler preview"
                        summary="A simple calendar application that allows a user to save events for each hour of the working day"
                        title="Work Day Scheduler"
                        technologies="jQuery / JavaScript / HTML / CSS"
                        repoLink="https://github.com/TrushilBudhia/Work-Day-Scheduler"
                    />
                    <Project 
                        siteLink="https://trushilbudhia.github.io/FlipCards-Half/" 
                        image={FlipCardImg} 
                        imageDescription="Flip Card preview"
                        summary="Flip card effect to display content"
                        title="Flip Card"
                        technologies="JavaScript / HTML / CSS"
                        repoLink="https://github.com/TrushilBudhia/FlipCards-Half"
                    />
                    <Project 
                        siteLink="https://trushilbudhia.github.io/SearchAnimate/" 
                        image={AutotyperImg} 
                        imageDescription="Autotyper preview"
                        summary="An animated autotyper to make a search field more dynamic"
                        title="Autotyper"
                        technologies="JavaScript / HTML / CSS"
                        repoLink="https://github.com/TrushilBudhia/SearchAnimate"
                    />
                </article>
            </article>
        </main>
    );
}