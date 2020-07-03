import React from 'react';
import './scss/App.scss';
import { Header, Slider } from './components';


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Slider />
      </main>
    </div>
  );
}

export default App;
