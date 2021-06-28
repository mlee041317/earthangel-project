import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
     <Navbar.Brand className="ml-2 mt-2"><h3>earth | angel</h3></Navbar.Brand>
     <Nav className="d-flex justify-content-around">
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <Link to='/zodiac'>Zodiac Signs</Link>
        <Link to='/journal'>Journal</Link>
      </Nav>
    </header>
  );
};

export default Header;