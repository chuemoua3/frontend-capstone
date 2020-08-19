import axios from "axios";

//questions from spring
const SONG_REST_API_URL = "http://localhost:8080/api/songs";
const USER_REST_API_URL = "http://localhost:8080/api/users";

class SongService {
    getSong(){
        return axios.get(SONG_REST_API_URL);
    }

    addUser(user){
        axios.post(USER_REST_API_URL, user);
    }
}

export default new SongService();