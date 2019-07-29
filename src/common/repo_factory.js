import service_post from "./service_post.js";
import service_user from "./service_user.js";
import service_login from "./service_login.js";
import service_address from "./service_address";

const repositories = {
  posts: service_post,
  users: service_user,
  login: service_login,
  address: service_address
};

export const repofactory = {
  get: name => repositories[name]
};
