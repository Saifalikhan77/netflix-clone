import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;
// https://api.themoviedb.org/3/movie/550?api_key=4e7f759a2480577542adffaafc68ceff