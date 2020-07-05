import React from 'react';
import './scss/App.scss';
import { Header, Slider, Offers } from './components';


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Slider />
        <section className="content-wrapper">
          <Offers />
        </section>
      </main>
    </div>
  );
}

export default App;
