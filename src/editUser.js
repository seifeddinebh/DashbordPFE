
import Swal from "sweetalert2";
import Footer from "./footer";
import Navbar from "./navbar";
import React, { useState, useEffect } from "react";
import UserService from "./services/UserService";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
//import { Navbar } from "react-bootstrap";

function EditUser() {

    const [id, setId] = useState()
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [password, setpassword] = useState("")
    const [adress, setadress] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [cin, setcin] = useState("")
    const [role, setrole] = useState("")


    const [photo, setPhoto] = useState("")
    const onFileChange = event => {
        setPhoto(event.target.files[0]);
    };

    const location = useLocation()
    const us = new UserService();
    const navigate = useNavigate();
    useEffect(() => {
        setId(location.state.id)
        AfficheDetails(location.state.id)
    }, [])
    const AfficheDetails = (id) => {
        console.log("id in update", id);
        us.findByid(id).then((res) => {
            //
            console.log("in update file", res.data.data);
            if (res.data.data) {

                setfirstname(res.data.data.firstname);
                setlastname(res.data.data.lastname);
                setpassword(res.data.data.password);
                setadress(res.data.data.adress);
                setphone(res.data.data.phone);
                setemail(res.data.data.email);
                setcin(res.data.data.cin);
                // setadress(res.data.data.adresse);
                setrole(res.data.data.role);
            }

        })
    }
    const UpDateFunction = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("firstname", firstname)
        formData.append("lastname", lastname)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("photo", photo)
        formData.append("adress", adress)
        formData.append("phone", phone)
        formData.append("cin", cin)
        formData.append("role", role)


        //

        us.update(id, formData).then((res) => {
            // console.log("Ok")
            Swal.fire('The profile is updated!');

        })
        navigate("/users")

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
                                                    <div className="col-lg-12">
                                                        <h1> Create User </h1>
                                                        <br></br>
                                                        <br></br>
                                                        <form id="contact-form" action="" method="post">
                                                            {/* <div className="i-am-centered"> */}

                                                            <div className="row" >
                                                                <div className="col-lg-6">


                                                                    <div class="mb-3">
                                                                        <label for="formFile" class="form-label">First Name</label>
                                                                        <input class="form-control" placeholder="Your First Name..." type="texte" id="formFile" value={firstname}
                                                                            onChange={(e) => setfirstname(e.target.value)} />
                                                                    </div>

                                                                </div>
                                                                <br></br>
                                                                <div className="col-lg-6">

                                                                    <div class="mb-3">
                                                                        <label for="formFile" class="form-label">Last Name</label>
                                                                        <input class="form-control" placeholder="Your Last Name..." type="texte" id="formFile" value={lastname}
                                                                            onChange={(e) => setlastname(e.target.value)} />
                                                                    </div>
                                                                </div>
                                                                <br></br>
                                                                <div className="col-lg-6">

                                                                    <div class="mb-3">
                                                                        <label for="formFile" class="form-label">Email</label>
                                                                        <input class="form-control" placeholder="Your Email..." type="email" id="formFile" value={email}
                                                                            onChange={(e) => setemail(e.target.value)} />
                                                                    </div>
                                                                </div>
                                                                <br></br>
                                                                <div className="col-lg-6">


                                                                    <div class="mb-3">
                                                                        <label for="formFile" class="form-label">Password</label>
                                                                        <input class="form-control" placeholder="Your Password..." type="password" id="formFile" value={password}
                                                                            onChange={(e) => setpassword(e.target.value)} />
                                                                    </div>
                                                                </div>
                                                                <br></br>
                                                                <div className="col-lg-6">


                                                                    <div class="mb-3">
                                                                        <label for="formFile" class="form-label">CIN</label>
                                                                        <input class="form-control" placeholder="Your CIN..." type="text" id="formFile" value={cin}
                                                                            onChange={(e) => setcin(e.target.value)} />
                                                                    </div>
                                                                </div>
                                                                <br></br>
                                                                <div className="col-lg-6">


                                                                    <div class="mb-3">
                                                                        <label for="formFile" class="form-label">Phone</label>
                                                                        <input class="form-control" placeholder="Your Phone..." type="text" id="formFile" value={phone}
                                                                            onChange={(e) => setphone(e.target.value)} />
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">


                                                                    <div class="mb-3">
                                                                        <label for="formFile" class="form-label">Adress</label>
                                                                        <input class="form-control" placeholder="Your Adress..." type="text" id="formFile" value={adress}
                                                                            onChange={(e) => setadress(e.target.value)} />
                                                                    </div>
                                                                </div>


                                                                <br></br>



                                                                <div className="col-lg-6">


                                                                    <div class="mb-3">
                                                                        <label for="formFile" class="form-label">Choisir une photo</label>
                                                                        <input class="form-control" type="file" id="formFile" onChange={onFileChange} />
                                                                    </div>
                                                                </div>



                                                                <p><div className="col-lg-6">
                                                                    <select class="form-select" aria-label="Default select example"
                                                                        value={role}
                                                                        onChange={(e) => setrole(e.target.value)}

                                                                    >
                                                                        <option selected>Choose a role</option>
                                                                        <option value="admin">Admin</option>
                                                                        <option value="Organizer">Organizer</option>
                                                                    </select>

                                                                </div>
                                                                </p>
                                                                <br></br>
                                                                <br></br>






                                                                {/* <div className="col-lg-12">
                                <fieldset>
                                    <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                </fieldset>
                            </div> */}
                                                                <div className="col-lg-12">
                                                                    <fieldset>
                                                                        <button onClick={(e) => UpDateFunction(e)} type="submit" id="form-submit" className="btn btn-primary"> Create</button>
                                                                    </fieldset>
                                                                </div>
                                                            </div>
                                                            {/* </div> */}
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

export default EditUser 