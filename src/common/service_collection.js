import api from "./api";

const resource = "/api/attributes/";
export default {
  collection(payload) {
    return api.post(`${resource}`, payload);
  }
};
