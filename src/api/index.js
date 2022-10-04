import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/posts";

export default async function getPosts() {
  const { data } = await axios.get(API_URL);
  return data;
}
