import React, { useEffect, useState } from "react";

import Footer from "./footer";
import UserService from "./services/UserService";
import { useNavigate } from "react-router-dom";
import LoginService from "./services/LoginService";


function RegisterDetails() {
    const [user, setUser] = useState([])
    //pour obtenir ID de user deja connecté par login
    const myid = localStorage.getItem("resultID");
    const us = new UserService();
    const myservice = new LoginService();
    const navigate = useNavigate();


    useEffect(() => {
        AfficheDetails(
            //parametre
        )
    }, [])
    const AfficheDetails = () => {
        console.log("myid", myid);
        if (myid != null) {
            us.findByid(myid).then((res) => {
                //
                console.log("detailss", res.data.data);
                if (res.data.data) { setUser(res.data.data) }

            })
        }

        else { navigate("/login") }
    }


    const ModifierProfile = (id) => {
        alert("bonjour")
        //navigation vers la page eventdaetail/id
        navigate("/update/" + id, { state: { id: id } })
    }

    const Logout = (id) => {
        alert("Logout ")
        myservice.Logout(id).then((res) => {
            console.log("result ", res)
            localStorage.removeItem("resultID");
            localStorage.removeItem("resultToken");
            console.log("id apres logout", localStorage.getItem("resultID"))
            console.log("token apres logout", localStorage.getItem("resultToken"))
            navigate("/home")

        })





    }

    return (

        <body>


            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Profile</h3>

                        </div>
                    </div>
                </div>
            </div>

            {/* <section className="vh-100" style={{ background_color: "#f4f5f7" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3" style={{ border_radius: 0.5, background_color: "#f4f5f7" }}>
                                <button type="button" class="btn btn-primary" onClick={(e) => ModifierProfile(myid)}>Modifier profil</button>
                            </div>
                            <br></br>
                            <div className="card mb-3" style={{ border_radius: 0.5 }}>
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-white"
                                        style={{ border_top_left_radius: .5, border_bottom_left_radius: 0.5 }}>
                                       
                                        <img src={`http://localhost:3000/storages/${user.photo}`}
                                            alt="Avatar" className="img-fluid my-5" style={{ width: 100, border_radius: 10.50 }} />

                                        <h5>{user.role}</h5>
                                        <p>{user.firstname}</p>
                                        <i className="far fa-edit mb-5"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Email</h6>
                                                    <p className="text-muted">{user.email}</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Phone</h6>
                                                    <p className="text-muted">{user.phone}</p>
                                                </div>
                                            </div>
                                            <h6>Projects</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Role</h6>
                                                    <p className="text-muted">{user.role}</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Most Viewed</h6>
                                                    <p className="text-muted">Dolor sit amet</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start">
                                                <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                                <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                                <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br></br>
                            <div className="card mb-3" style={{ border_radius: 0.5, background_color: "#f4f5f7" }}>
                                <button type="button" class="btn btn-primary" onClick={(e) => Logout(myid)}>LogOut</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}
            <div>
                {user ? (
                    <section className="vh-100" style={{ background_color: "#f4f5f7" }}>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col col-lg-6 mb-4 mb-lg-0">
                                    <div className="card mb-3" style={{ border_radius: 0.5, background_color: "#f4f5f7" }}>
                                        {/* <button type="button" class="btn btn-primary" onClick={(e) => ModifierProfile(myid)}>Modifier profil</button> */}
                                    </div>
                                    <br></br>
                                    <div className="card mb-3" style={{ border_radius: 0.5 }}>
                                        <div className="row g-0">
                                            <div className="col-md-4 gradient-custom text-center text-white"
                                                style={{ border_top_left_radius: .5, border_bottom_left_radius: 0.5 }}>

                                                <img src={`http://localhost:3000/storages/${user.photo}`}
                                                    alt="Avatar" className="img-fluid my-5" style={{ width: 100, border_radius: 10.50 }} />

                                                <h5>{user.role}</h5>
                                                <p>{user.firstname}</p>
                                                <i className="far fa-edit mb-5"></i>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body p-4">
                                                    <h6>Information</h6>
                                                    <hr className="mt-0 mb-4" />
                                                    <div className="row pt-1">
                                                        <div className="col-6 mb-3">
                                                            <h6>Email</h6>
                                                            <p className="text-muted">{user.email}</p>
                                                        </div>
                                                        <div className="col-6 mb-3">
                                                            <h6>Phone</h6>
                                                            <p className="text-muted">{user.phone}</p>
                                                        </div>
                                                    </div>
                                                    <h6>Projects</h6>
                                                    <hr className="mt-0 mb-4" />
                                                    <div className="row pt-1">
                                                        <div className="col-6 mb-3">
                                                            <h6>Role</h6>
                                                            <p className="text-muted">{user.role}</p>
                                                        </div>
                                                        <div className="col-6 mb-3">
                                                            <h6>Most Viewed</h6>
                                                            <p className="text-muted">Dolor sit amet</p>
                                                        </div>
                                                    </div>
                                                    {/* <div className="d-flex justify-content-start">
                                                        <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                                        <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                                        <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <br></br>
                                    {/* <div className="card mb-3" style={{ border_radius: 0.5, background_color: "#f4f5f7" }}>
                                        <button type="button" class="btn btn-primary" onClick={(e) => Logout(myid)}>LogOut</button>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <h1>rirn</h1>
                )}
            </div>
            <Footer />
        </body>



    )

}
export default RegisterDetails