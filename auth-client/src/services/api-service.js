import axios from "axios";


const baseURL = "http://localhost:3000";

const $axios = axios.create({
    baseURL: baseURL,
    timeout: 32000
})


const ApiService = {

    get(resource, ...args) {
        return $axios.get(resource, ...args);
    },
    post(resource, data) {
        return $axios.post(resource, data);
    },
    put(resource, data) {
        return $axios.put(resource, data);
    },
    delete(resource) {
        return $axios.delete(resource);
    },
    patch(resource, data) {
        return $axios.patch(resource, data);
    }

};

export default ApiService;
