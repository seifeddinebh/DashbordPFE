import React, { useEffect, useState } from "react";

import Footer from "../Dashbord/footer";
import UserService from "../../services/UserService";
import { useLocation, useNavigate } from "react-router-dom";
import LoginService from "../../services/LoginService";
import Navbar from "../Dashbord/navbar";

function RegisterDetails() {
    const [user, setUser] = useState([])
    const location = useLocation();
    //pour obtenir ID de user deja connecté par login
    const myid = location.state.id
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
    const logoutFN = (id) => {

        alert("Logout ")
        LS.Logout(id).then((res) => {
            console.log("result ", res)
            localStorage.removeItem("resultID");
            localStorage.removeItem("resultToken");
            console.log("id apres logout", localStorage.getItem("resultID"))
            console.log("token apres logout", localStorage.getItem("resultToken"))
            navigate("/")

        })
    }

    const settingFN = (id) => {

        navigate("/UpDateProfile/" + id, { state: { id: id } })
    }
    const profileFN = (id) => {

        navigate("/registerDetails/" + id, { state: { id: id } })




    }

    return (


        <div className="container-scroller">
            <Navbar />

            <div className="container-fluid page-body-wrapper">
            <div id="settings-trigger"><i className="mdi mdi-settings"></i></div>
                <div id="theme-settings" className="settings-panel">
                    <i className="settings-close mdi mdi-close"></i>
                    <p className="settings-heading">SIDEBAR SKINS</p>
                    <div className="sidebar-bg-options selected" id="sidebar-default-theme">
                        <div className="img-ss rounded-circle bg-light border me-3"></div>Default
                    </div>
                    <div className="sidebar-bg-options" id="sidebar-dark-theme">
                        <div className="img-ss rounded-circle bg-dark border me-3"></div>Dark
                    </div>
                    <p className="settings-heading mt-2">HEADER SKINS</p>
                    <div className="color-tiles mx-0 px-4">
                        <div className="tiles default primary"></div>
                        <div className="tiles success"></div>
                        <div className="tiles warning"></div>
                        <div className="tiles danger"></div>
                        <div className="tiles info"></div>
                        <div className="tiles dark"></div>
                        <div className="tiles light"></div>
                    </div>
                </div>

                <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div className="navbar-menu-wrapper d-flex align-items-stretch">
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="mdi mdi-chevron-double-left"></span>
                        </button>
                        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                            <a className="navbar-brand brand-logo-mini" href="index.html"><img src="../assets/images/logo-mini.svg"
                                alt="logo" /></a>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="mdi mdi-email-outline"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-left navbar-dropdown preview-list"
                                    aria-labelledby="messageDropdown">
                                    <h6 className="p-3 mb-0 font-weight-semibold">Messages</h6>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="../assets/images/faces/face1.jpg" alt="image" className="profile-pic" />
                                        </div>
                                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                                            <p className="text-gray mb-0"> 1 Minutes ago </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="../assets/images/faces/face6.jpg" alt="image" className="profile-pic" />
                                        </div>
                                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                                            <p className="text-gray mb-0"> 15 Minutes ago </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="../assets/images/faces/face7.jpg" alt="image" className="profile-pic" />
                                        </div>
                                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                                            <p className="text-gray mb-0"> 18 Minutes ago </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <h6 className="p-3 mb-0 text-center text-primary font-13">4 new messages</h6>
                                </div>
                            </li>
                            <li className="nav-item dropdown ms-3">
                                <a className="nav-link" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                                    <i className="mdi mdi-bell-outline"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-left navbar-dropdown preview-list"
                                    aria-labelledby="notificationDropdown">
                                    <h6 className="px-3 py-3 font-weight-semibold mb-0">Notifications</h6>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-success">
                                                <i className="mdi mdi-calendar"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 className="preview-subject font-weight-normal mb-0">New order recieved</h6>
                                            <p className="text-gray ellipsis mb-0"> 45 sec ago </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-warning">
                                                <i className="mdi mdi-settings"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 className="preview-subject font-weight-normal mb-0">Server limit reached</h6>
                                            <p className="text-gray ellipsis mb-0"> 55 sec ago </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-info">
                                                <i className="mdi mdi-link-variant"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 className="preview-subject font-weight-normal mb-0">Kevin karvelle</h6>
                                            <p className="text-gray ellipsis mb-0"> 11:09 PM </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <h6 className="p-3 font-13 mb-0 text-primary text-center">View all notifications</h6>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item nav-logout d-none d-md-block me-3 ">
                                <a className="nav-link" href="#">Dashbord Organisateur</a>
                            </li>

                            <li className="nav-item nav-profile dropdown d-none d-md-block">
                                <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <div className="nav-profile-text btn-danger">Compte </div>
                                </a>
                                <div className="dropdown-menu center navbar-dropdown" aria-labelledby="profileDropdown">
                                    <a className="dropdown-item" onClick={(e) => profileFN(myid)}>
                                        <i className="mdi mdi-account"></i> Profile </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" onClick={(e) => settingFN(myid)}>
                                        <i className="mdi mdi-home-circle"></i> settings </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" onClick={(e) => logoutFN(myid)}>
                                        <i className="mdi mdi-account-key"></i> Logout </a>
                                    <div className="dropdown-divider"></div>

                                </div>
                            </li>

                        </ul>
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                            data-toggle="offcanvas">
                            <span className="mdi mdi-menu"></span>
                        </button>
                    </div>
                </nav>
                <div className="main-panel">
                    <div className="content-wrapper pb-0">
                        <div className="page-header flex-wrap">
                            <div className="header-left">
                                <button className="btn btn-primary mb-2 mb-md-0 me-2" onClick={(e) => CreatePage()}> Create new User </button>
                                <button className="btn btn-primary mb-2 mb-md-0 me-2" onClick={(e) => CreateCategorie()}> Create new Categorie </button>
                                <button className="btn btn-primary mb-2 mb-md-0 me-2" onClick={(e) => CreateEvent()}> Create new Event </button>

                            </div>

                        </div>



                        <body>


                            <div className="page-heading header-text">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h3>Details user</h3>

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

                    </div></div></div>
        </div>

    )

}
export default RegisterDetails