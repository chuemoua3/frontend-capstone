import axios from "axios";

//questions from spring
const SONG_REST_API_URL = "http://localhost:8080/api/songs";
// const USER_REST_API_URL

class SongService {
    getSong(){
        return axios.get(SONG_REST_API_URL);
    }

    // addUser(){
    //     axios.post(USER_REST_API_URL);
    // }
}

export default new SongService();