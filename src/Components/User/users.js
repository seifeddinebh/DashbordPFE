
import { getAllByAltText } from "@testing-library/react";
import Footer from "../Dashbord/footer";
import Navbar from "../Dashbord/navbar";
import UserService from "../../services/UserService"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
function Users() {

    const navigate = useNavigate()




    const CreatePage = () => {
        alert("Vers Create Page")
        //navigation vers la page eventdaetail/id
        navigate("/createUser")
    }

    const CreateCategorie = () => {
        alert("Vers Create Create Categorie")
        //navigation vers la page eventdaetail/id
        navigate("/createCategorie")
    }

    const CreateEvent = () => {
        alert("Vers Create Create Event")
        //navigation vers la page eventdaetail/id
        navigate("/createEvent")
    }



    const US = new UserService();
    const [users, setUsers] = useState([])



    useEffect(() => {

        AllUsers()

    }, [])
    const AllUsers = () => {
        US.getAll().then((res) => {

            console.log("Liste des Users ", res.data.data);
            setUsers(res.data.data);

        })
    }

    const Afficher = (id) => {
        alert("Afficher")
        //navigation vers la page eventdaetail/id
        navigate("/details/" + id, { state: { id: id } })
    }
    const Modifier = (id) => {
        alert("Modifier")

        navigate("/editUser/" + id, { state: { id: id } })
    }
    const Supprimer = (id) => {
        console.log("ok supprimer", id);
        Swal.fire({
            title: "Vous-êtez sûr??",
            text: "Vous ne pourrez pas revenir en arrière!",
            icon: "avertissement",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, supprimez-le!",
        }).then((result) => {
            if (result.isConfirmed) {
                US.remove(id).then((res) => {
                    console.log(res.status);
                    console.log("resposne", res);
                    if (res.status === 200) {
                        AllUsers()
                        Swal.fire("Supprimé!", "Votre fichier a été supprimé.", "Succès");
                    }
                });
            }
        });
    };




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
                                    <a className="dropdown-item" onClick={(e) => profileFN(iduser)}>
                                        <i className="mdi mdi-account"></i> Profile </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" onClick={(e) => settingFN(iduser)}>
                                        <i className="mdi mdi-home-circle"></i> settings </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" onClick={(e) => logoutFN(iduser)}>
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
                        <br></br>
                        <br></br>
                        <br></br>






                        <div className="row">

                            <div className="col-xl-12 stretch-card grid-margin">
                                <div className="card">
                                    <div className="card-body pb-0">
                                        <h4 className="card-title mb-0">List Of Users</h4>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table custom-table text-dark">
                                                <thead>
                                                    <tr>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                        <th>Role</th>
                                                        <th>Adress</th>

                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {users.map((user) => (
                                                        <tr>
                                                            <td>
                                                                {/* <img src="../assets/images/faces/face2.jpg" className="me-2" alt="image" />  */}
                                                                <img src={`http://localhost:3000/storages/${user.photo}`} alt="" />{user.firstname}
                                                            </td>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <span className="pe-2 d-flex align-items-center">{user.lastname}</span>

                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <span className="pe-2 d-flex align-items-center">{user.email}</span>

                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <span className="pe-2 d-flex align-items-center">{user.phone}</span>

                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <span className="pe-2 d-flex align-items-center">{user.role}</span>

                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <span className="pe-2 d-flex align-items-center">{user.adress}</span>

                                                                </div>
                                                            </td>
                                                            <td>
                                                                <button type="button" class="btn btn-success" onClick={(e) => Afficher(user._id)}>Details</button>
                                                                <button type="button" class="btn btn-primary" onClick={(e) => Modifier(user._id)}>Edit</button>
                                                                <button type="button" class="btn btn-danger" onClick={(e) => Supprimer(user._id)}>Delete</button>
                                                            </td>

                                                        </tr>
                                                    ))}



                                                </tbody>
                                            </table>
                                        </div>
                                        <a className="text-black font-13 d-block pt-2 pb-2 pb-lg-0 font-weight-bold ps-4" href="#">Show more</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <Footer />

                </div>

            </div>

        </div >

    )


}

export default Users;