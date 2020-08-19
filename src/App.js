import React from 'react';
import './App.css';
import SongComponent from './components/SongComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <UserComponent/>
      <SongComponent/>
    </div>
  );
}

export default App;
