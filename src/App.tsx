import React from 'react';
import './scss/App.scss';
import { Header, Slider, Offers, Calculator } from './components';


function App() {

  
  return (
    <div className="app">
      <Header />
      <main>
        <Slider />
        <section className="content-wrapper">
          <Offers />
          <Calculator />
          
        </section>
      </main>
    </div>
  );
}

export default App;
