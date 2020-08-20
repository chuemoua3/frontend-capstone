import React from 'react';
import SongService from '../services/SongService';
import { Link } from 'react-router-dom';

class UserComponent extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            name: ""
        };

     }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({name: event.target.value});
      }
    
    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.name);
    //     event.preventDefault();
    //   }

    userSave = (event) => {
        event.preventDefault();
        let user = {userName : this.state.name}
        SongService.addUser(user);
        // console.log("chue", 50);
    }
    
      render() {
        return (
        <div className="homeContainer">
          <div className="rowHome">
            

          <form className="formHome">
            <h1 className="homeHeader">Welcome to Guess That Song</h1>
            <h5>Please enter your name below.</h5>
              <br/>
            <label className="homeName">
              Name:
              <input type="text" onChange={this.handleChange} />
            </label>
            <button onClick={this.userSave} color="secondary"><Link to ="/song" className="homebutton">Let's Guess</Link></button>
          </form>
            <img className="logosize" src="https://i.ibb.co/1ZrjrxN/guessthatsong6.png" alt="guess that song"/>

          </div>
          </div>
        );
      }

}

export default UserComponent;