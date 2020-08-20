import React from 'react';
import SongService from '../services/SongService';
import { Link } from 'react-router-dom';
import {FormControl,FormLabel,FormControlLabel,Radio,RadioGroup,Button,Grid,Typography} from '@material-ui/core';


class SongComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            songs:[],
            // correctAnswers: [a,c,d,b,c,a,d,c],
            answerChoice: [],
            counter: 0
        }
    }

    //use to call REST api
    componentDidMount(){
        SongService.getSong().then((response) => {
           this.setState({ songs: response.data})  
        });
    }

    //function for handle to select an answer
    handleChange = (event) => {
        let answer = event.target.value.charAt(0);
        this.state.answerChoice.push(answer);
        console.log(answer);
    };
    //comparing the two arrays
    getResults = (prevState) => {
        let correctAnswers = ["A", "C", "D", "B", "C", "A", "D", "C"];
        for (let i = 0; i < correctAnswers.length; i++) {
            if (correctAnswers[i] === this.state.answerChoice[i]){
                this.setState((prevState) => ({
                    counter : prevState.counter +  1
                }))
            }
        }
         console.log(this.state.counter);
    }

    
    render (){
        return (
            <div className="container1">
                <div className="row">
            <Grid container spacing={1} direction="column" alignItems="center">
            <thead>
                <tr>
                <th><Button onClick={this.userSave}  color="secondary"><Link to ="/">Home</Link></Button></th>
                <th><Button onClick={this.userSave} ><Link to ="#">Leaderboard</Link></Button></th>
                </tr>
            </thead>
                {/* <h1 className="text-center">Guess That Song</h1> */}
                <br></br>
                <h5>Choose the correct answer song title that goes with the lyrics.</h5>
                <br></br>
                    <div className="container2">

                    {this.state.songs.map(song => 
                        <div style={{width:500}}>
                         <FormControl component = "fieldset">
                        
                        {/* Lyrics question */}
                        {/* <FormLabel className="lyrics"component = "legend">{song.lyrics}</FormLabel> */}
                        <Typography variant="">{song.lyrics}</Typography>
                        <RadioGroup name = "answer" aria-label="answer" onChange={this.handleChange}>
                            <FormControlLabel value = {song.answer1} control = {<Radio></Radio>} label={song.answer1}></FormControlLabel>
                            <FormControlLabel value = {song.answer2} control = {<Radio></Radio>} label={song.answer2}></FormControlLabel> 
                            <FormControlLabel value = {song.answer3} control = {<Radio></Radio>} label={song.answer3}></FormControlLabel>  
                            <FormControlLabel value = {song.answer4} control = {<Radio></Radio>} label={song.answer4}></FormControlLabel>   
                        </RadioGroup><br/>
                        </FormControl>
                        </div>
                
                    )}
                    </div>
                    {/* button for submitting the quiz and render out # out of 8 is right */}
                    <button  onClick={this.getResults} data-toggle="modal" data-target="#resultsModal"color="primary">Done Guessing</button><br/>
                    <thead>
                        <tr>
                            <th><Button onClick={this.userSave}  color="secondary"><Link to ="/">Home</Link></Button></th>
                            <th><Button onClick={this.userSave} ><Link to ="#">Leaderboard</Link></Button></th>
                        </tr>
                    </thead>

                    </Grid>
                        <div className="modal fade" id="resultsModal" tabIndex="-1" role="dialog" aria-labelledby="resultsModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="resultsModalLabel">Results</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                You score {this.state.counter} out of 8.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <Button variant="contained" color="secondary" href="/song">Let's Guess Again!</Button>
                                


                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    <br/></div>

        )
    }
}

export default SongComponent;
