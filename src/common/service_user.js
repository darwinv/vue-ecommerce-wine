import api from "./api";

const resource = "/users";
export default {
  get() {
    return api.get(`${resource}`);
  }
};
