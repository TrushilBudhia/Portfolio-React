import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer'

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
    // if (currentPage === 'Contact') {
    //   return <Contact />;
    // }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // The props passed to the Header component are currentPage with a value of {currentPage} and handlePageChange with a value of {handlePageChange} function  */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // The renderPage function is being invoked */}
      {renderPage()}
      {/* // The footer component renders the footer section */}
      <Footer />
    </div>
  );
}
