import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // Rendering the page depending on what the currentPage is - returns those specified components. 
  // If not any of the options, return the Resume component
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // the props of NavTabs are currentPage with a value of {currentPage} and handlePageChange with a value of {handlePageChange} function - the props are passed to handlePageChange  */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // The renderPage function is being invoked */}
      {renderPage()}
    </div>
  );
}
