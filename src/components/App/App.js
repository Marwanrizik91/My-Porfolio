import React from 'react';
import About from '../About';
import Header from '../Header';
import Hireme from '../Hireme';
import MyProjects from '../MyProjects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <MyProjects />
      <Hireme />
    </div>
  );
}

export default App;
