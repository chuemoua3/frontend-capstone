import React from 'react';
import SongService from '../services/SongService';
import SongComponent from '../components/SongComponent';
import axios from 'axios'
import { Button } from '@material-ui/core';

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
        let user = {userName : this.state.name, score : 50}
        SongService.addUser(user);
        // console.log("chue", 50);
    }
    
      render() {
        return (
          <form>
            <label>
              Name:
              <input type="text" onChange={this.handleChange} />
            </label>
            <Button onClick={this.userSave}>Submit</Button>
          </form>
        );
      }

}

export default UserComponent;