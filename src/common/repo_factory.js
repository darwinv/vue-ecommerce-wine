import service_post from "./service_post.js";
import service_user from "./service_user.js";

const repositories = {
  posts: service_post,
  users: service_user
};

export const repofactory = {
  get: name => repositories[name]
};
