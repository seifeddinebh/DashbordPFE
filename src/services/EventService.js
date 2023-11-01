import http from "../services/interceptor/AxiosInterceptor2"


export default class EventService {


    create(data) {

        // console.log("Add User")
        return http.post("/Event/Create", data);


    }

    getAll() {

        console.log("liste des event")
        return http.get("/Event/List");

    }

    remove(id) {

        console.log("test delete")
        return http.delete("/Event/Delete/" + id);
    }
    update(id, data) {

        return http.put("/Event/Update/" + id, data);
    }
    GetOne(id) {

        // console.log("liste des users")
        return http.get("/Event/GetOne/" + id);

    }
    FindByOrganiser(id) {

        //console.log("liste des users")
        return http.get("/Event/FindByOrganiser/" + id);

    }











}