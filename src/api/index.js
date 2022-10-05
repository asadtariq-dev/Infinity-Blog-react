import axios from "axios";

const getPosts = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    Accept: "application/json",
  },
});

export default getPosts;
