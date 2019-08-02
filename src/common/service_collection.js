import api from "./api";

const resource = "/api/attributes/";
export default {
  obtain(payload) {
    return api.post(`${resource}`, payload);
  }
};
