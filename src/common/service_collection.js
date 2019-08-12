import api from "./api";

const resource = "/api/attributes/";
const url_product = "/api/products/";
export default {
  obtain(payload) {
    return api.post(`${resource}`, payload);
  },
  product(id) {
    return api.get(`${url_product}${id}`);
  }
};
