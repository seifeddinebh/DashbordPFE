import React from "react";
import Footer from "../Dashbord/footer";
import Navbar from "../Dashbord/navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import CategorieService from "../../services/CategorieService";
import EventService from "../../services/EventService";
import Swal from "sweetalert2";



function AfficheEvent() {

    const location = useLocation()
    //const CS = new CategorieService();
    const ES = new EventService();
    const navigate = useNavigate();
    const [nomOrganisateur, setNomOrganisateur] = useState("pas d'organisateur")
    const [events, setEvents] = useState("");
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [photo, setPhoto] = useState("")
    const [file, setFile] = useState("")
    const [localisation, setlocalisation] = useState("")
    const [periode, setPeriode] = useState("")
    const [budgetevent, setBudgetevent] = useState("")
    const [price, setPrice] = useState("")
    const [equipement, setEquipement] = useState([])
    const [tags, setTags] = useState([])
    const [organizer, setOrganizer] = useState([])
    const [category, setCategory] = useState([])
    const [selectedOptions, setSelectedOptions] = useState();
    // const [ListOfOrganizer,setListOfOrganizer]=useState([])
    const onFileChange = event => {
        setPhoto(events.target.files[0]);
    };


    useEffect(() => {// Reexpliquer
        console.log("ok id ", location.state.id);
        setId(location.state.id);//??
        getEventById(location.state.id);//?? name(x) name(saif)


    }, []);

    const getEventById = (id) => {
        console.log("id", id);
        if (id != null) {
            ES.GetOne(id).then((res) => {
                //
                console.log("detailss", res.data.data);
                if (res.data.data) {
                    setEvents(res.data.data);

                    setName(res.data.data.name);
                    setDescription(res.data.data.description);
                    setBudgetevent(res.data.data.budgetevent)
                    setPhoto(res.data.data.photo);
                    setFile(res.data.data.file);
                    setPeriode(res.data.data.periode);
                    setBudgetevent(res.data.data.budgetevent)
                    setPrice(res.data.data.price);
                    setlocalisation(res.data.data.localisation)

                    setEquipement(res.data.data.equipement);// Affichage ??
                    setTags(res.data.data.tags)// Affichage ??

                    if (res.data.data.organizer != null) {
                        setOrganizer(res.data.data.organizer)
                        setNomOrganisateur(res.data.data.organizer.firstname)
                    }
                    else {
                        console.log("************************************no organiser*****************");
                    }
                    setCategory(res.data.data.category)







                }

            })
        }

        //  else { navigate("/login") }
    }
    const Modifier = (id) => {
        alert("Vers Create Modifier")
        //navigation vers la page eventdaetail/id
        navigate("/modifierEvent/" + id, { state: { id: id } })
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
                ES.remove(id).then((res) => {
                    console.log(res.status);
                    console.log("resposne", res);
                    if (res.status === 200) {
                        navigate(-1)
                        Swal.fire("Supprimé!", "Votre fichier a été supprimé.", "Succès");
                    }
                });
            }
        });
    };




    return (


        <div className="container-scroller">


            <Navbar />
            <br></br>

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
                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>
                <div className="main-panel">
                    <div class="row">
                        <div class="col-lg-6 offset-3">
                            <div class="card mb-5">
                                <div class="card-body text-center">



                                    <img src={`http://localhost:3000/storages/${events.photo}`} alt="" />
                                    <h5 class="my-3">{name}</h5>
                                    <p class="text-muted mb-1">Budget :{budgetevent}</p>
                                    <p class="text-muted mb-1">desc :{description}</p>

                                    <p class="text-muted mb-1">localisation:{localisation}</p>
                                    <p class="text-muted mb-1">Periode :{periode}</p>



                                    <p class="text-muted mb-1">List des Equipements{equipement.map((Eqp) => (
                                        <li key={Eqp._id}> {Eqp}</li>
                                    ))}</p>

                                    <p class="text-muted mb-1"> List Des Tags{tags.map((Tags) => (
                                        <li key={Tags._id}> {Tags}</li>
                                    ))}</p>


                                    <p class="text-muted mb-1">
                                        Organizer: {nomOrganisateur}
                                    </p>
                                    <p class="text-muted mb-1">
                                        Categorie: {category.name}
                                    </p>





                                </div>
                                <br></br>
                                <button type="button" class="btn btn-danger" onClick={(e) => Supprimer(id)}>Delete</button>
                                <br></br>
                                <button type="button" class="btn btn-primary" onClick={(e) => Modifier(id)}>UpDate</button>
                                <br></br>
                                <button type="button" class="btn btn-success" onClick={(e) => navigate("/events")}>Back</button>
                            </div>


                        </div>

                    </div>
                </div>

            </div >
        </div>
    )
}

export default AfficheEvent