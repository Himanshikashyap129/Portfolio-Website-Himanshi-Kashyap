import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarLogo}>My Portfolio</div>
      <div style={{ ...styles.navbarLinks, ...(isMenuOpen ? styles.activeLinksMobile : {}) }}>
        <a style={styles.link} href="/">Home</a>
        <a style={styles.link} href="/About">About</a>
        <a style={styles.link} href="/Contact">Contact</a>
        <a style={styles.link} href="/skills">Skills</a>
      </div>
      <button style={styles.navbarToggle} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#45A29E',  
    color: '#ffffff',  
    position: 'fixed',  
    top: 0,             
    left: 0,            
    width: '100%',     
    zIndex: 1000,       
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
  },
  navbarLogo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',  
  },
  navbarLinks: {
    display: 'flex',
    gap: '2rem',
    zIndex: 1000,
  },
  link: {
    color: '#ffffff',  
    textDecoration: 'none',
    padding: '0 50px',
    position: 'relative',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#00ffab',  
  },
  linkBeforeHover: {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: '#00ffab',  
    transform: 'scaleX(0)',
    transformOrigin: 'bottom right',
    transition: 'transform 0.25s ease-out',
  },
  linkAfterHover: {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom left',
  },
  navbarToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#ffffff',  
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  navbarLinksMobile: {
    display: 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '60px',
    left: 0,
    right: 0,
    backgroundColor: '#45A29E',  
    padding: '1rem',
    borderRadius: '5px',
  },
  activeLinksMobile: {
    display: 'flex',
  },
  '@media (max-width: 768px)': {
    navbarLinks: {
      display: 'none',
    },
    navbarToggle: {
      display: 'block',  
    },
  },
};

export default Navbar;
