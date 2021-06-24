import React from 'react';
import JournalContainer from '../containers/JournalContainer';

function JournalPage(props) {
  return(
    <div className="journal-page">  
      <JournalContainer entries={props.entries}/>
    </div>  
  );
}

export default JournalPage;