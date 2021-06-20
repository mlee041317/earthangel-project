import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav> 
        <Link to='/'>Main</Link>
        <Link to='/About'>About</Link>
        <Link to='/Zodiac'>Zodiac Signs</Link>
        <Link to='/Journal'>Journal</Link>
      </nav>
      <h1>What is this?</h1>

    </header>
  );
};

export default Header;