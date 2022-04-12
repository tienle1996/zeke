import axios from "axios";
export default axios.create({
  baseURL: "https://zeke-backend.herokuapp.com//api",
  headers: {
    "Content-type": "application/json",
  },
});