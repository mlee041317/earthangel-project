import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="header">
     <Navbar bg="light" expand="lg">
     <Navbar.Brand>earth | angel</Navbar.Brand>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <Link to='/zodiac'>Zodiac</Link>
        <Link to='/journal'>Journal</Link>
      </Navbar>
    </header>
  );
};

export default Header;