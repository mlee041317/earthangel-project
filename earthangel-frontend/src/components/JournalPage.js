import React from 'react';
import Header from './Header';
import JournalContainer from '../containers/JournalContainer';

function JournalPage(props) {
  return(
    <React.Fraction>
      <Header />  
      <JournalContainer entries={props.entries}/>
    </React.Fraction>  
  );
}

export default JournalPage;