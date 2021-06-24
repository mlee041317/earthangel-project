import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import routes from './config/routes';

function App() {
  return (
    <React.Fragment>
      <Header />
      { routes }
    </React.Fragment>
  );
};

export default App;