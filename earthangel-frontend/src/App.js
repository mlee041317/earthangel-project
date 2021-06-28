import React from 'react';
import PlaySound from './components/PlaySound';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import routes from './config/routes';

function App(props) {
  const path = props.location.pathname
  return (
    <React.Fragment>
      {path !== '/' && <Header />}
      { routes }

      <PlaySound />
    </React.Fragment>
  );
};

export default withRouter(App);