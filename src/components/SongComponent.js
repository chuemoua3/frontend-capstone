import React from 'react';
import SongService from '../services/SongService';
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup
} from '@material-ui/core';


class SongComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            songs:[]
        }
    }

    //use to call REST api
    componentDidMount(){
        SongService.getSong().then((response) => {
           this.setState({ songs: response.data})  
        });
    }

    

    render (){
        return (
            <div className="container1">
                <h1 className="text-center">Guess That Song</h1>
                <h4>Choose the correct answer song title that goes with the lyrics.</h4>
                <br></br>
                    <div className="container2">
                    {this.state.songs.map(song => 
                         <FormControl component = "fieldset">

                        <FormLabel component = "legend">{song.lyrics}</FormLabel>
                        <RadioGroup name = "answer" aria-label="answer">
                            <FormControlLabel value = {song.answer1} control = {<Radio></Radio>} label={song.answer1}></FormControlLabel>   
                            <FormControlLabel value = {song.answer2} control = {<Radio></Radio>} label={song.answer2}></FormControlLabel>   
                            <FormControlLabel value = {song.answer3} control = {<Radio></Radio>} label={song.answer3}></FormControlLabel>   
                            <FormControlLabel value = {song.answer4} control = {<Radio></Radio>} label={song.answer4}></FormControlLabel>   
                        </RadioGroup>
                        </FormControl>
                
                    )}
                    </div>

            </div>

        )
    }
}

export default SongComponent;