import React from 'react';
import SongService from '../services/SongService';
import { Button } from '@material-ui/core';
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
        SongService.addUser(user, 0);
        // console.log("chue", 50);
    }
    
      render() {
        return (
          <form>
          <br/>
            <label>
              Name:
              <input type="text" onChange={this.handleChange} />
            </label>
            <Button onClick={this.userSave}  color="secondary"><Link to ="/song">Submit</Link></Button>
          </form>
        );
      }

}

export default UserComponent;