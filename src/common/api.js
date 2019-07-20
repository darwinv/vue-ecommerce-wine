import axios from "axios";

//const baseDomain = "https://jsonplaceholder.typicode.com";
//const url = `${baseDomain}`;
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
  // In case that you need a token:
  // headers : {"Authorization "}
});
