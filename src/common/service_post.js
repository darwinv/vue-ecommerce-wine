import api from "./api";

const resource = "/posts";
export default {
  get() {
    return api.get(`${resource}`);
  }
};
