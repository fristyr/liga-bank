import React from 'react';
import './scss/App.scss';
import { Header, Slider, Offers, Calculator, Footer, ApplicationRequest } from './components';


function App() {

  
  return (
    <div className="app">
      <Header />
      <main>
        <Slider />
        <section className="content-wrapper">
          <Offers />
          <Calculator />
          <ApplicationRequest />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
