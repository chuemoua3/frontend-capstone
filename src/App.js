import React from 'react';
import './App.css';
import SongComponent from './components/SongComponent';
import UserComponent from './components/UserComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <br/>
    //   <UserComponent/>
    //   <hr></hr>
    //   <SongComponent/>
    // </div>
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route> */}
          <Route path ="/" exact={true} component= {UserComponent}/>
          <Route path ="/song" exact={true} component= {SongComponent}/>
          {/* </Route> */}
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
