import React from 'react';
import Header from './components/Header';
// import Footer from './components/Footer';
import routes from './config/routes';

function App() {
  return (
    <div className="container">
      <Header />
      { routes }
      {/* <Footer /> */}
    </div>
  );
};

export default App;