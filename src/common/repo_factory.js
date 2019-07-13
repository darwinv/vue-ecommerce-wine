import service_post from "./service_post.js";

const repositories = {
  posts: service_post
};

export const repofactory = {
  get: name => repositories[name]
};
