import api from "./api";

const resource = "https://jsonplaceholder.typicode.com/users";
export default {
  get() {
    return api.get(`${resource}`);
  }
};
