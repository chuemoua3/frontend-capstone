import React from 'react';
import './App.css';
import SongComponent from './components/SongComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
      <br/>
      <UserComponent/>
      <hr></hr>
      <SongComponent/>
    </div>
  );
}

export default App;
