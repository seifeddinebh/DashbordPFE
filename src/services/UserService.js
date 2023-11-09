import http from "../services/interceptor/AxiosInterceptor2"


export default class UserService {
    create(data) {

        console.log("***userService***", data)
        return http.post("/User/Create", data);

    }

    getAll() {

        console.log("liste des users")
        return http.get("/User/List");

    }
    getOrganiser() {
        return http.get("/User/FindUserByRole/Organizer")
    }

    remove(id) {

        console.log("test delete")
        return http.delete("/User/Delete/" + id);
    }
    update(id, data) {

        return http.put("/User/Update/" + id, data);
    }

    findByid(id) {

        return http.get("/User/GetOne/" + id);
    }

    findByCIN(cin) {

        return http.get("/User/FindOne/" + cin);
    }


    findByRole(role) {

        return http.get("/User/FindUserByRole/" + role);
    }

    findByRole(email) {

        return http.get("/User/FindUserByEmail/" + email);
    }



    // Login(data) {
    //     console.log("*******login on service is ****", data)
    //     return http.post("/User/Login/", data);


    // }

    ResetPWD(id) {

        return http.post("/User/ResetPWD", id);


    }

    ChangePWD(id, data) {
        return http.put("/User/ChangePWD/" + id, data);



    }





}