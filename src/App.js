import React from 'react';
import './App.css';

import Title from './Components/Title.js'
import Blurb from './Components/Blurb.js'
import Skills from './Components/Skills.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <Blurb/>
        <Skills/>
      </header>
    </div>
  );
}

export default App;
