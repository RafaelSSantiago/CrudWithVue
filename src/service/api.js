import axios from "axios";

const api = axios.create({
    baseURL : 'http://localhost:8585/clientes',
    headers: {
        "Content-type" : "application/json"
    }
})

export default api;