import http from '../service/api';

class ClienteDataService {
    getAll(){
        return http.get("/clientes");
    }

    get(id){
        return http.get(`/clientes/${id}`);
    }
    create(data){
        return http.post("/clientes", data);
    }

    update(id, data){
        return http.put(`/clientes/editar${id}`, data);
    }

    delete(id){
        return http.delete(`/clientes/delete${id}`);
    }
}

export default new ClienteDataService();