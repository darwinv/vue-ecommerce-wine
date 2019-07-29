import api from "./api";

//const resource = "/login/";
const resource = "/api-token-auth/";
export default {
  login(payload) {
    return api.post(`${resource}`, payload);
  }
};
