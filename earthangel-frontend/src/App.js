import React from 'react';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import routes from './config/routes';

function App(props) {
  // console.log(props);
  const path = props.location.pathname
  return (
    <React.Fragment>
      {path !== '/' && <Header />}
      { routes }
    </React.Fragment>
  );
};

export default withRouter(App);