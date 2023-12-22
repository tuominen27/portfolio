import React from 'react'
import ReactDOM from 'react-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
