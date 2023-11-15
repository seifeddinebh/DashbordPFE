import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import CategorieService from "./services/CategorieService";
import EventService from "./services/EventService";
import UserService from "./services/UserService"
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2"

function ModifierEvent() {


    const [id, setid] = useState("")
    const location = useLocation()
    //*********************************************** */
    const [nomOrganisateur,setNomOrganisateur]=useState("pas d'organisateur")
    let nextId = 0;
     const [namevent, setNamevent] = useState('');
    const [chaine, setChaine] = useState('');
    const [artists1, setArtists1] = useState([]);
    const [artists, setArtists] = useState([]);
    const [array1, setarray1] = useState([]);
    const [array2, setarray2] = useState([]);
    const [events, setEvents] = useState("");

    const [name, setName] = useState("")
    const [name1, setName1] = useState("")
    const [description, setDescription] = useState("")
    const [photo, setPhoto] = useState("")
    const [file, setFile] = useState("")
    const [localisation, setLocalisation] = useState("")
    const [periode, setPeriode] = useState("")
    const [budgetevent, setBudgetevent] = useState("")
    const [price, setPrice] = useState("")
    const [equipement, setEquipement] = useState([])
    const [tags, setTags] = useState([])
    const [organizer, setOrganizer] = useState("")
    const [category, setCategory] = useState("")
    const [selectedOptions, setSelectedOptions] = useState();

    const [dispoListEvents, setdispoListEvents] = useState([]);
    const [query1, setquery1] = useState("")
    const [dispoListusers, setdispoListUsers] = useState([]);
    const [query2, setquery2] = useState("")
    const [dispoListcategories, setdispoListCategories] = useState([]);
    const [query3, setquery3] = useState("")
    const [x, setX] = useState("")//recuperation de id organizer à partir de son nom dans liste deroulante
    const [y, setY] = useState("")/// recuperation de id category
    const [t, sett] = useState([])
    const onFileChange = event => {
        setPhoto(event.target.files[0]);
    };
 
    const navigate = useNavigate()
    const ES = new EventService();
    const US = new UserService();
    const CS = new CategorieService();
    let array = []
    const SignInFunction = (e) => {
        e.preventDefault();

        { //adaptation de liste des tag dans tableau array2
            artists.map((ar) => {
                array2.push(ar.name)
            })



            //adaptation de liste des equipement dans tableau array1
            artists1.map((ar1) => {
                array1.push(ar1.name)
            })

        }


        //alert(query1)
        const formData = new FormData();
formData.append("name", namevent)

        formData.append("description", description)
        formData.append("budgetevent", budgetevent)
        formData.append("photo", photo)
        formData.append("file", file)
        formData.append("localisation", localisation)
        formData.append("periode", periode)
        formData.append("price", price)
        formData.append("equipement", array1)
        formData.append("tags", array2)
        formData.append("organizer", x)
        formData.append("category", y)




        // ES.create(formData).then((res) => {
        //     console.log(res.data.data)
        // })
        ES.update(id, formData).then((res) => {
            // console.log("Ok")
            Swal.fire('The profile is updated!');

        })




        navigate("/events")
    }


    const onChangeHandler1 = (e) => {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option = el.getAttribute('id');
        setquery1(e.target.value)
        console.log("id organize", option)
        setX(option)
    }
    const onChangeHandler2 = (e) => {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option = el.getAttribute('id');
        setquery2(e.target.value)
        console.log("idcategory", option)
        setY(option)
    }
    useEffect(() => {

        setid(location.state.id)
        OneEventFunction(location.state.id)
        US.getOrganiser().then((res) => {

            console.log("Liste des Users ", res.data.data);
            setdispoListUsers(res.data.data);

        })
        CS.getAll().then((res) => {

            console.log("Liste des CAtegories ", res.data.data);
            setdispoListCategories(res.data.data);

        })

    }, [])

    const OneEventFunction = (id) => {
        ES.GetOne(id).then((res) => {
            console.log("one event ", res.data.data)
           setNamevent(res.data.data.name)
            setDescription(res.data.data.description)
            setBudgetevent(res.data.data.budgetevent)
            setLocalisation(res.data.data.localisation)
            setPeriode(res.data.data.periode)
            setTags(res.data.data.tags)
            setEquipement(res.data.data.equipement)
            if (res.data.data.organizer != null) {
                setOrganizer(res.data.data.organizer)
                setNomOrganisateur(res.data.data.organizer.firstname)
            }
            else {
                console.log("************************************no organiser*****************");
            }
            setCategory(res.data.data.category)


        })
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
                            <li className="nav-item nav-logout d-none d-md-block me-3">
                                <a className="nav-link" href="#">Status</a>
                            </li>
                            <li className="nav-item nav-logout d-none d-md-block">
                                <button className="btn btn-sm btn-danger">Trailing</button>
                            </li>
                            <li className="nav-item nav-profile dropdown d-none d-md-block">
                                <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <div className="nav-profile-text">English </div>
                                </a>
                                <div className="dropdown-menu center navbar-dropdown" aria-labelledby="profileDropdown">
                                    <a className="dropdown-item" href="#">
                                        <i className="flag-icon flag-icon-bl me-3"></i> French </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        <i className="flag-icon flag-icon-cn me-3"></i> Chinese </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        <i className="flag-icon flag-icon-de me-3"></i> German </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        <i className="flag-icon flag-icon-ru me-3"></i>Russian </a>
                                </div>
                            </li>
                            <li className="nav-item nav-logout d-none d-lg-block">
                                <a className="nav-link" href="index.html">
                                    <i className="mdi mdi-home-circle"></i>
                                </a>
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
                                <button className="btn btn-primary mb-2 mb-md-0 me-2"> Create new User </button>
                                <button className="btn btn-primary mb-2 mb-md-0 me-2"> Create new Categorie </button>
                                <button className="btn btn-primary mb-2 mb-md-0 me-2"> Create new Event </button>

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
                                                    <div className="col-lg-7 offset-5">
                                                        <h1>Update Event </h1>
                                                        <br></br>
                                                        <br></br>
                                                        <form id="contact-form" action="" method="post">
                                                            {/* <div className="i-am-centered"> */}

                                                            <div className="row" >
                                                                <br></br>
                                                                <div class="mb-3">
                                                                    <label for="formFile" class="form-label">Name</label>
                                                                    <input class="form-control" placeholder="name..." type="texte" id="formFile" value={namevent}
                                                                        onChange={(e) => setNamevent(e.target.value)} />
                                                                </div>

                                                                <p></p>
                                                                <br></br>
                                                                <div class="mb-3">
                                                                    <label for="formFile" class="form-label">Description</label>
                                                                    <input class="form-control" placeholder="Description..." type="texte" id="formFile" value={description}
                                                                        onChange={(e) => setDescription(e.target.value)} />
                                                                </div>

                                                                <p></p>
                                                                <br></br>
                                                                <div class="mb-3">
                                                                    <label for="formFile" class="form-label">Budget</label>
                                                                    <input class="form-control" placeholder="budget..." type="texte" id="formFile" value={budgetevent}
                                                                        onChange={(e) => setBudgetevent(e.target.value)} />
                                                                </div>

                                                                <p></p>
                                                                <br></br>
                                                                <div class="mb-3">
                                                                    <label for="formFile" class="form-label">Periode</label>
                                                                    <input class="form-control" placeholder="Your periode..." type="texte" id="formFile" value={periode}
                                                                        onChange={(e) => setPeriode(e.target.value)} />
                                                                </div>

                                                                <p></p>
                                                                <div class="mb-3">
                                                                    <label for="formFile" class="form-label">Localisation</label>
                                                                    <input class="form-control" placeholder="Your Localisation..." type="texte" id="formFile" value={localisation}
                                                                        onChange={(e) => setLocalisation(e.target.value)} />
                                                                </div>

                                                                <p></p>
                                                                <div class="mb-3">
                                                                    <label for="formFile" class="form-label">Photo</label>
                                                                    <input class="form-control" type="file" id="formFile" onChange={onFileChange} />
                                                                </div>
                                                                <br></br>
                                                                <p></p>
                                                                <select class="form-select" aria-label="Default select example" onChange={e => onChangeHandler1(e)}>
                                                                    {dispoListusers.map((dispo1) => (
                                                                        <option id={dispo1._id}> {dispo1.firstname}</option>
                                                                    ))}
                                                                </select>

                                                                <br></br>
                                                                <br></br>
                                                                <p></p>
                                                                <select class="form-select" aria-label="Default select example" onChange={e => onChangeHandler2(e)}>
                                                                    {dispoListcategories.map((dispo2) => (
                                                                        <option id={dispo2._id}> {dispo2.name}</option>
                                                                    ))}
                                                                </select>


                                                                <br></br>
                                                                <div>




                                                                </div>

                                                            </div>
                                                            <br></br><br></br>


                                                            <div class="mb-3">
                                                                <label for="formFile" class="form-label">Tages</label>
                                                                <input
                                                                    value={name}
                                                                    onChange={e => setName(e.target.value)} class="form-control" placeholder="tags..." type="texte" id="formFile"
                                                                />
                                                            </div>

                                                            <p></p>
                                                            <button  class="btn btn-primary"
                                                             onClick={(e) => {
                                                                e.preventDefault();
                                                                setArtists([
                                                                    ...artists,
                                                                    { id: nextId++, name: name }

                                                                ]);
                                                                console.log("artists", artists)


                                                            }}>Add other tag</button>
                                                            <ul>
                                                                {artists.map(artist =>
                                                                    (<li key={artist.id}>{artist.name}</li>)
                                                                )
                                                                }
                                                            </ul>

                                                            <br></br><br></br>


                                                            <div class="mb-3">
                                                                <label for="formFile" class="form-label">Equipements</label>
                                                                <input
                                                                    value={name1}
                                                                    onChange={e => setName1(e.target.value)} class="form-control" placeholder="Equipement..." type="texte" id="formFile"
                                                                />
                                                            </div>

                                                            <button class="btn btn-primary"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setArtists1([
                                                                    ...artists1,
                                                                    { id: nextId++, name: name1 }

                                                                ]);
                                                                console.log("equipement", artists1)


                                                            }}>Add other equipement</button>
                                                            <ul>
                                                                {artists1.map(artist1 =>
                                                                    (<li key={artist1.id}>{artist1.name}</li>)
                                                                )
                                                                }
                                                            </ul>
                                                            <div className="col-lg-12">
                                                                <br></br>
                                                                <br></br>

                                                                <fieldset>
                                                                    <button onClick={(e) => SignInFunction(e)} id="form-submit" class="btn btn-primary"> Update</button>
                                                                </fieldset>
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
export default ModifierEvent