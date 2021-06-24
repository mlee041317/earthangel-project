import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Opening from '../components/OpeningPage';
import Main from '../components/MainPage';
import About from '../components/AboutPage';
import Zodiac from '../components/ZodiacPage';
import Journal from '../components/JournalPage';


export default (
  <Switch>
    <Route path='/opening' component={ Opening }/>
    <Route exact path='/' component={ Main }/>
    <Route path='/zodiac' component={ Zodiac }/>
    <Route path='/journal' component={ Journal }/>
    <Route path='/about' component={ About }/> 
  </Switch>
);