import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
     <Navbar bg="light" expand="lg">
     <Navbar.Brand Link to="/">EarthAngel</Navbar.Brand>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <Link to='/zodiac'>Zodiac</Link>
        <Link to='/journal'>Journal</Link>
      </Navbar>
    </header>
  );
};

export default Header;