import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTE3ZjMzMGZhYmVmZWZhOWYyMzZjODRhZDRjMTE3OSIsInN1YiI6IjYzZWQ4NGY0MWI3Mjk0MDBlNmYxN2FjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TTL3bgIoSfhk7IWfOO1-td_cO4yqiTtv3FJ9UAYeuzg";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const ax = axios;
export default ax;
