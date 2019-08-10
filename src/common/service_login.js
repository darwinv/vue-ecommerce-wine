import api from "./api";

const url_login = "/api/login/";
const url_register = "/api/users/create/"; 
//const resource = "/api-token-auth/";
export default {
  login(payload) {
    return api.post(`${url_login}`, payload);
  },
  register(payload){
    return api.post(`${url_register}`, payload);
  }
};
