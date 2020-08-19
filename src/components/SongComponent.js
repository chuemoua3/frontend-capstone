import React from 'react';
import SongService from '../services/SongService';
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    Button
} from '@material-ui/core';


class SongComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            songs:[],
            // correctAnswers: [a,c,d,b,c,a,d,c],
            answerChoice: []
        }
    }

    //use to call REST api
    componentDidMount(){
        SongService.getSong().then((response) => {
           this.setState({ songs: response.data})  
        });
    }

    //maybe have to do this handleChange method for answerChoice
    handleChange = (event) => {
        let answer = event.target.value.charAt(0);
        this.state.answerChoice.push(answer);
        console.log(this.state.answer);
    };

    //calculating points???
    

    

    render (){
        return (
            <div className="container1">
            
                <h1 className="text-center">Guess That Song</h1>
                <h4>Choose the correct answer song title that goes with the lyrics.</h4>
                <br></br>
                    <div className="container2">

                    {this.state.songs.map(song => 
                         <FormControl component = "fieldset">
                        
                        {/* Lyrics question */}
                        <FormLabel component = "legend">{song.lyrics}</FormLabel>

                        <RadioGroup name = "answer" aria-label="answer">
                        <button onClick={this.answerChoice}><FormControlLabel value = {song.answer1} control = {<Radio></Radio>} label={song.answer1}></FormControlLabel></button>
                        <button onClick={this.answerChoice}><FormControlLabel value = {song.answer2} control = {<Radio></Radio>} label={song.answer2}></FormControlLabel></button>   
                        <button onClick={this.answerChoice}><FormControlLabel value = {song.answer3} control = {<Radio></Radio>} label={song.answer3}></FormControlLabel></button>   
                        <button onClick={this.answerChoice}><FormControlLabel value = {song.answer4} control = {<Radio></Radio>} label={song.answer4}></FormControlLabel></button>   
                        </RadioGroup><br/>
                        </FormControl>
                
                    )}
                    </div>
                    <Button variant="contained" color="secondary">Submit</Button><br/>
                    <br/></div>

        )
    }
}

export default SongComponent;

//create onClick for each button
