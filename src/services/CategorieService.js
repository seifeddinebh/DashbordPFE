import http from "../services/interceptor/AxiosInterceptor2"



export default class CategorieService {




    create(data) {

        console.log("Add category", data)
        return http.post("/Categorie/Create/", data);


    }

    getAll() {


        return http.get("/Categorie/List");

    }

    remove(id) {

        console.log("test delete")
        return http.delete("/Categorie/Delete/" + id);
    }


    GetOne(id) {

        //console.log("liste des users")
        return http.get("/Categorie/GetOne/" + id);

    }

    UpdatePhoto(id, data) {

        return http.put("/Categorie/UpdatePhoto/" + id, data);
    }







}


