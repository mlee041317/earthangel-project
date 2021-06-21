import React from 'react';
import JournalContainer from '../containers/JournalContainer';

function JournalPage(props) {
  return(
    <>
      <JournalContainer entries={props.entries}/>
    </>  
  );
}

export default JournalPage;