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
            <div>
                <h1 className="text-center">Song List</h1>
                    <div>
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