import service_login from "./service_login.js";
import service_address from "./service_address";
import service_collection from "./service_collection";

const repositories = {
  login: service_login,
  address: service_address,
  collection: service_collection
};

export const repofactory = {
  get: name => repositories[name]
};
