import { startTransition, useEffect, useState } from "react";
import EventService from "../../services/EventService";
import Footer from "../Dashbord/footer";
import Navbar from "../Dashbord/navbar";
import { useNavigate, useLocation } from "react-router-dom";
import LoginService from "../../services/LoginService";



function AddEvent() {

    const [dispoList, setdispoList] = useState([]);
    const [query1, setquery1] = useState("")
    const [id, setId] = useState("")
    const [x, setX] = useState("")
    const navigate = useNavigate()
    const ES = new EventService();
    const CS = new LoginService();
    const location = useLocation()
    useEffect(() => {
        setId(location.state.id)
        ES.getAll().then((res) => { // Liste Deroulante get All Events

            console.log("Liste des evenements ", res.data.data);
            setdispoList(res.data.data);

        })
    }, [])


    const SignInFunction = (e) => {
        e.preventDefault();


        const data = { "ListOfEvents": [x] }


        CS.update(id, data).then((res) => {

        })
        navigate("/events")

    }

    const onChangeHandler = (e) => {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option = el.getAttribute('id');
        setquery1(e.target.value)
        console.log("option", option)
        setX(option)
    }


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
                                <div className="contact-page section">
                                    <div className="container">

                                        <div className="col-lg-6">
                                            <div className="right-content">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h1>Create category </h1>
                                                        <br></br>
                                                        <br></br>
                                                        <form id="contact-form" action="" method="post">


                                                            <div className="row" >


                                                                <div className="col-lg-6">
                                                                    <fieldset>


                                                                        <label for="cars">Events:</label>



                                                                        <select style={{ backgroundColor: "white", borderRadius: "12%" }} id="cars" onChange={e => onChangeHandler(e)} >
                                                                            {dispoList.map((dispo) => (
                                                                                <option id={dispo._id}> {dispo.name}</option>
                                                                            ))}
                                                                        </select>
                                                                    </fieldset>


                                                                </div>






                                                                <div className="col-lg-12">
                                                                    <fieldset>
                                                                        <button onClick={(e) => SignInFunction(e)} type="submit" id="form-submit" className="orange-button"> Add Event</button>
                                                                    </fieldset>
                                                                </div>
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

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

export default AddEvent