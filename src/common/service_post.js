import api from "./api";

const resource = "https://jsonplaceholder.typicode.com/posts";
export default {
    get() {
        return api.get(`${resource}`);
    }
};
