import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { Link, useNavigate } from "react-router-dom";
import LoginService from "../src/services/LoginService"

export function Home() {
    const LS= new LoginService()

    const navigate = useNavigate();
    const [iduser,setiduser]=useState("")

    useEffect(() => {
setiduser(localStorage.getItem('resultID'))

    }, [])

    const CreatePage = () => {
        alert("Vers Create Page")
        //navigation vers la page eventdaetail/id
        navigate("/createUser")
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
            {/* <div className="row p-0 m-0 proBanner" id="proBanner">
                <div className="col-md-12 p-0 m-0">
                    <div className="card-body card-body-padding d-flex align-items-center justify-content-between">
                        <div className="ps-lg-1">
                            <div className="d-flex align-items-center justify-content-between">
                                <p className="mb-0 font-weight-medium me-3 buy-now-text">Free 24/7 customer support, updates, and more with
                                    this template!</p>
                                <a href="https://www.bootstrapdash.com/product/plus-admin-template/?utm_source=organic&utm_medium=banner&utm_campaign=buynow_demo"
                                    target="_blank" className="btn me-2 buy-now-btn border-0">Get Pro</a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <a href="https://www.bootstrapdash.com/product/plus-admin-template/"><i
                                className="mdi mdi-home me-3 text-white"></i></a>
                            <button id="bannerClose" className="btn border-0 p-0">
                                <i className="mdi mdi-close text-white me-0"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

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
                                <a className="nav-link" href="#">Dashbord Organisateur</a>
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





                        <div className="row">
                            <div className="col-sm-4 stretch-card grid-margin">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <img className="img-fluid w-100" src="../assets/images/dashboard/img_1.jpg" alt="" />
                                    </div>
                                    <div className="card-body px-3 text-dark">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-muted font-13 mb-0">ENTIRE APARTMENT</p>
                                            <i className="mdi mdi-heart-outline"></i>
                                        </div>
                                        <h5 className="font-weight-semibold"> Cosy Studio flat in London </h5>
                                        <div className="d-flex justify-content-between font-weight-semibold">
                                            <p className="mb-0">
                                                <i className="mdi mdi-star star-color pe-1"></i>4.60 (35)
                                            </p>
                                            <p className="mb-0">$5,267/night</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 stretch-card grid-margin">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <img className="img-fluid w-100" src="../assets/images/dashboard/img_2.jpg" alt="" />
                                    </div>
                                    <div className="card-body px-3 text-dark">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-muted font-13 mb-0">ENTIRE APARTMENT</p>
                                            <i className="mdi mdi-heart-outline"></i>
                                        </div>
                                        <h5 className="font-weight-semibold"> Victoria Bedsit Studio Ensuite </h5>
                                        <div className="d-flex justify-content-between font-weight-semibold">
                                            <p className="mb-0">
                                                <i className="mdi mdi-star star-color pe-1"></i>4.83 (12)
                                            </p>
                                            <p className="mb-0">$6,144/night</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 stretch-card grid-margin">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <img className="img-fluid w-100" src="../assets/images/dashboard/img_3.jpg" alt="" />
                                    </div>
                                    <div className="card-body px-3 text-dark">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-muted font-13 mb-0">ENTIRE APARTMENT</p>
                                            <i className="mdi mdi-heart-outline"></i>
                                        </div>
                                        <h5 className="font-weight-semibold">Fabulous Huge Room</h5>
                                        <div className="d-flex justify-content-between font-weight-semibold">
                                            <p className="mb-0">
                                                <i className="mdi mdi-star star-color pe-1"></i>3.83 (15)
                                            </p>
                                            <p className="mb-0">$5,267/night</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-4 grid-margin">
                                <div className="card card-stat stretch-card mb-3">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div className="text-white">
                                                <h3 className="font-weight-bold mb-0">$168.90</h3>
                                                <h6>This Month</h6>
                                                <div className="badge badge-danger">23%</div>
                                            </div>
                                            <div className="flot-bar-wrapper">
                                                <div id="column-chart" className="flot-chart"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card stretch-card mb-3">
                                    <div className="card-body d-flex flex-wrap justify-content-between">
                                        <div>
                                            <h4 className="font-weight-semibold mb-1 text-black"> Member Profit </h4>
                                            <h6 className="text-muted">Average Weekly Profit</h6>
                                        </div>
                                        <h3 className="text-success font-weight-bold">+168.900</h3>
                                    </div>
                                </div>
                                <div className="card stretch-card mb-3">
                                    <div className="card-body d-flex flex-wrap justify-content-between">
                                        <div>
                                            <h4 className="font-weight-semibold mb-1 text-black"> Total Profit </h4>
                                            <h6 className="text-muted">Weekly Customer Orders</h6>
                                        </div>
                                        <h3 className="text-success font-weight-bold">+6890.00</h3>
                                    </div>
                                </div>
                                <div className="card mt-3">
                                    <div className="card-body d-flex flex-wrap justify-content-between">
                                        <div>
                                            <h4 className="font-weight-semibold mb-1 text-black"> Issue Reports </h4>
                                            <h6 className="text-muted">System bugs and issues</h6>
                                        </div>
                                        <h3 className="text-danger font-weight-bold">-8380.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 stretch-card grid-margin">
                                <div className="card">
                                    <div className="card-body pb-0">
                                        <h4 className="card-title mb-0">Financial management review</h4>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table custom-table text-dark">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Sale Rate</th>
                                                        <th>Actual</th>
                                                        <th>Variance</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <img src="../assets/images/faces/face2.jpg" className="me-2" alt="image" /> Jacob Jensen
                                                        </td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <span className="pe-2 d-flex align-items-center">85%</span>
                                                                <select id="star-1" name="rating" autocomplete="off">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>32,435</td>
                                                        <td>40,234</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="../assets/images/faces/face3.jpg" className="me-2" alt="image" /> Cecelia Bradley
                                                        </td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <span className="pe-2 d-flex align-items-center">55%</span>
                                                                <select id="star-2" name="rating" autocomplete="off">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>4,36780</td>
                                                        <td>765728</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="../assets/images/faces/face4.jpg" className="me-2" alt="image" /> Leah Sherman
                                                        </td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <span className="pe-2 d-flex align-items-center">23%</span>
                                                                <select id="star-3" name="rating" autocomplete="off">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>2300</td>
                                                        <td>22437</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="../assets/images/faces/face5.jpg" className="me-2" alt="image" /> Ina Curry
                                                        </td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <span className="pe-2 d-flex align-items-center">44%</span>
                                                                <select id="star-4" name="rating" autocomplete="off">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>53462</td>
                                                        <td>1,75938</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="../assets/images/faces/face7.jpg" className="me-2" alt="image" /> Lida Fitzgerald
                                                        </td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <span className="pe-2 d-flex align-items-center">65%</span>
                                                                <select id="star-5" name="rating" autocomplete="off">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>67453</td>
                                                        <td>765377</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="../assets/images/faces/face2.jpg" className="me-2" alt="image" /> Stella Johnson
                                                        </td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <span className="pe-2 d-flex align-items-center">49%</span>
                                                                <select id="star-6" name="rating" autocomplete="off">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>43662</td>
                                                        <td>96535</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="../assets/images/faces/face9.jpg" className="me-2" alt="image" /> Maria Ortiz
                                                        </td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <span className="pe-2 d-flex align-items-center">65%</span>
                                                                <select id="star-7" name="rating" autocomplete="off">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td>76555</td>
                                                        <td>258546</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <a className="text-black font-13 d-block pt-2 pb-2 pb-lg-0 font-weight-bold ps-4" href="#">Show more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 stretch-card grid-margin">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card border-0">
                                                <div className="card-body">
                                                    <div className="card-title">Channel Sessions</div>
                                                    <div className="d-flex flex-wrap">
                                                        <div className="doughnut-wrapper w-50">
                                                            <canvas id="doughnutChart1" width="100" height="100"></canvas>
                                                        </div>
                                                        <div id="doughnut-chart-legend"
                                                            className="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card border-0">
                                                <div className="card-body">
                                                    <div className="card-title">News Sessions</div>
                                                    <div className="d-flex flex-wrap">
                                                        <div className="doughnut-wrapper w-50">
                                                            <canvas id="doughnutChart2" width="100" height="100"></canvas>
                                                        </div>
                                                        <div id="doughnut-chart-legend2"
                                                            className="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card border-0">
                                                <div className="card-body">
                                                    <div className="card-title">Device Sessions</div>
                                                    <div className="d-flex flex-wrap">
                                                        <div className="doughnut-wrapper w-50">
                                                            <canvas id="doughnutChart3" width="100" height="100"></canvas>
                                                        </div>
                                                        <div id="doughnut-chart-legend3"
                                                            className="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 col-xl-4 stretch-card grid-margin">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title mb-2">Upcoming events (3)</div>
                                        <h3 className="mb-3">23 september 2019</h3>
                                        <div className="d-flex border-bottom border-top py-3">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" checked /></label>
                                            </div>
                                            <div className="ps-2">
                                                <span className="font-12 text-muted">Tue, Mar 5, 9.30am</span>
                                                <p className="m-0 text-black"> Hey I attached some new PSD files… </p>
                                            </div>
                                        </div>
                                        <div className="d-flex border-bottom py-3">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" /></label>
                                            </div>
                                            <div className="ps-2">
                                                <span className="font-12 text-muted">Mon, Mar 11, 4.30 PM</span>
                                                <p className="m-0 text-black"> Discuss performance with manager </p>
                                            </div>
                                        </div>
                                        <div className="d-flex border-bottom py-3">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" /></label>
                                            </div>
                                            <div className="ps-2">
                                                <span className="font-12 text-muted">Tue, Mar 5, 9.30am</span>
                                                <p className="m-0 text-black">Meeting with Alisa</p>
                                            </div>
                                        </div>
                                        <div className="d-flex pt-3">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" /></label>
                                            </div>
                                            <div className="ps-2">
                                                <span className="font-12 text-muted">Mon, Mar 11, 4.30 PM</span>
                                                <p className="m-0 text-black"> Hey I attached some new PSD files… </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-4 stretch-card grid-margin">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex border-bottom mb-4 pb-2">
                                            <div className="hexagon">
                                                <div className="hex-mid hexagon-warning">
                                                    <i className="mdi mdi-clock-outline"></i>
                                                </div>
                                            </div>
                                            <div className="ps-4">
                                                <h4 className="font-weight-bold text-warning mb-0"> 12.45 </h4>
                                                <h6 className="text-muted">Schedule Meeting</h6>
                                            </div>
                                        </div>
                                        <div className="d-flex border-bottom mb-4 pb-2">
                                            <div className="hexagon">
                                                <div className="hex-mid hexagon-danger">
                                                    <i className="mdi mdi-account-outline"></i>
                                                </div>
                                            </div>
                                            <div className="ps-4">
                                                <h4 className="font-weight-bold text-danger mb-0">34568</h4>
                                                <h6 className="text-muted">Profile visits</h6>
                                            </div>
                                        </div>
                                        <div className="d-flex border-bottom mb-4 pb-2">
                                            <div className="hexagon">
                                                <div className="hex-mid hexagon-success">
                                                    <i className="mdi mdi-laptop-chromebook"></i>
                                                </div>
                                            </div>
                                            <div className="ps-4">
                                                <h4 className="font-weight-bold text-success mb-0"> 33.50% </h4>
                                                <h6 className="text-muted">Bounce Rate</h6>
                                            </div>
                                        </div>
                                        <div className="d-flex border-bottom mb-4 pb-2">
                                            <div className="hexagon">
                                                <div className="hex-mid hexagon-info">
                                                    <i className="mdi mdi-clock-outline"></i>
                                                </div>
                                            </div>
                                            <div className="ps-4">
                                                <h4 className="font-weight-bold text-info mb-0">12.45</h4>
                                                <h6 className="text-muted">Schedule Meeting</h6>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="hexagon">
                                                <div className="hex-mid hexagon-primary">
                                                    <i className="mdi mdi-timer-sand"></i>
                                                </div>
                                            </div>
                                            <div className="ps-4">
                                                <h4 className="font-weight-bold text-primary mb-0"> 12.45 </h4>
                                                <h6 className="text-muted mb-0">Browser Usage</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-4 stretch-card grid-margin">
                                <div className="card color-card-wrapper">
                                    <div className="card-body">
                                        <img className="img-fluid card-top-img w-100" src="../assets/images/dashboard/img_5.jpg" alt="" />
                                        <div className="d-flex flex-wrap justify-content-around color-card-outer">
                                            <div className="col-6 p-0 mb-4">
                                                <div className="color-card primary m-auto">
                                                    <i className="mdi mdi-clock-outline"></i>
                                                    <p className="font-weight-semibold mb-0">Delivered</p>
                                                    <span className="small">15 Packages</span>
                                                </div>
                                            </div>
                                            <div className="col-6 p-0 mb-4">
                                                <div className="color-card bg-success m-auto">
                                                    <i className="mdi mdi-tshirt-crew"></i>
                                                    <p className="font-weight-semibold mb-0">Ordered</p>
                                                    <span className="small">72 Items</span>
                                                </div>
                                            </div>
                                            <div className="col-6 p-0">
                                                <div className="color-card bg-info m-auto">
                                                    <i className="mdi mdi-trophy-outline"></i>
                                                    <p className="font-weight-semibold mb-0">Arrived</p>
                                                    <span className="small">34 Upgraded</span>
                                                </div>
                                            </div>
                                            <div className="col-6 p-0">
                                                <div className="color-card bg-danger m-auto">
                                                    <i className="mdi mdi-presentation"></i>
                                                    <p className="font-weight-semibold mb-0">Reported</p>
                                                    <span className="small">72 Support</span>
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

