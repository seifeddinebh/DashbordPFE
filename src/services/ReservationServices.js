import http from "../services/interceptor/AxiosInterceptor"



export default class ReservationService {

    create(data) {

        // console.log("Add User")
        console.log("--------",data)
        return http.post("/Reservation/Create", data);


    }





}