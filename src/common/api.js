import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8000/",
  baseURL: process.env.BASE_URL,
  // In case that you need a token:
  headers: getHeaders()
});

function getHeaders(multipart = false) {
  let defaultHeaders = {};

  if (multipart) {
    defaultHeaders = {};
  }

  if (localStorage.token) {
    defaultHeaders = {
      Authorization: `Token ${localStorage.token}`,
      ...defaultHeaders
    };
  }

  return defaultHeaders;
}
