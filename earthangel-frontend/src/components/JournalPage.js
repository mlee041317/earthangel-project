import React from 'react';
import JournalContainer from '../containers/JournalContainer';
import { Form, Button } from 'react-bootstrap';

function JournalPage(props) {
  return(
    <React.Fragment>  
      <JournalContainer entries={props.entries}/>
    </React.Fragment>  
  );
}

export default JournalPage;