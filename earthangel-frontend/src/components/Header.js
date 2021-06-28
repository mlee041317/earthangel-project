import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
     <Navbar.Brand className="ml-2 mt-2"><h3>earth | angel</h3></Navbar.Brand>
     <Nav className="d-flex justify-content-end">
        <Link to='/' className="p-2">Main</Link>
        <Link to='/about' className="p-2">About</Link>
        <Link to='/zodiac' className="p-2">Zodiac Signs</Link>
        <Link to='/journal' className="p-2">Journal</Link>
      </Nav>
    </header>
  );
};

export default Header;