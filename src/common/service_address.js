import api from "./api";

const resource = "/api/useraddresses/";
export default {
  address() {
    return api.get(`${resource}`);
  }
};
