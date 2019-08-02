import api from "./api";

const resource = "/api/login/";
//const resource = "/api-token-auth/";
export default {
  login(payload) {
    return api.post(`${resource}`, payload);
  }
};
