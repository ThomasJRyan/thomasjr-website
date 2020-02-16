import React from 'react';
import './App.css';

import Title from './Components/Title.js'
import Navbar from './Components/Navbar.js'
import Blurb from './Components/Blurb.js'
import Skills from './Components/Skills.js'
import Education from './Components/Education.js'
import Links from './Components/Links.js'
import Resume from './Components/Resume.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <Navbar/>
        <Blurb/>
        <Education/>
        <Skills/>
        <Links/>
        <Resume/>
      </header>
    </div>
  );
}

export default App;
