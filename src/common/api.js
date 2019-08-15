import axios from "axios";

export default axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  // baseURL: "https://18.208.152.142/",
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
