import http from "../http-common";

class UserDataService {
    getAll(){
        return http.get("/");
    }
    get(id){
        return http.get(`api/user/${id}/?user_id=${id}`);
    }
    create(data){
        return http.post(`api/user/add/`, data);
    }
    update(id,data){
        return http.put(`api/user/update/${id}/?user_id=${id}`, data);
    }
    delete(id){
        return http.delete(`/api/user/delete/${id}/?user_id=${id}`);
    }
    deleteAll(){
        return http.delete(`api/delete/`);
    }
    findByName(name){
        return http.get(`/users/${name}`);
    }
}

export default new UserDataService();