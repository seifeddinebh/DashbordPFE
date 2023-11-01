import http from "../services/interceptor/AxiosInterceptor"


export default class LoginService {




    Login(data) {
        console.log("*******login on service is ****", data)
        return http.post("/User/Login/", data);


    }
    update(id, data) {
        console.log("test data on service", data)
        return http.put("/Categorie/Update/" + id, data);
    }

    SendMail(data) {

        return http.post("/User/SendMail/", data);


    }

    Logout(id) {

        return http.get("/User/Logout/" + id);



    }


}