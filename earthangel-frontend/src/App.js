import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
// import Footer from './components/Footer';
import routes from './config/routes';

function App() {
  return (
    <React.Fragment>
      <Header />
      { routes }
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default App;