import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom";

function Navbar() {


    const navigate = useNavigate()
    return (


        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile border-bottom">
                    <a href="#" className="nav-link flex-column">
                        <div className="nav-profile-image">
                            <img src="../assets/images/faces/face1.jpg" alt="profile" />

                        </div>
                        <div className="nav-profile-text d-flex ms-0 mb-3 flex-column">
                            <span className="font-weight-semibold mb-1 mt-2 text-center">Antonio Olson</span>
                            <span className="text-secondary icon-sm text-center">$3499.00</span>
                        </div>
                    </a>
                </li>
                <li className="nav-item pt-3">
                    <a className="nav-link d-block" href="index.html">
                        <img className="sidebar-brand-logo" src="../assets/images/logo.svg" alt="" />
                        <img className="sidebar-brand-logomini" src="../assets/images/logo-mini.svg" alt="" />
                        <div className="small font-weight-light pt-1">Responsive Dashboard</div>
                    </a>
                    <form className="d-flex align-items-center" action="#">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <i className="input-group-text border-0 mdi mdi-magnify"></i>
                            </div>
                            <input type="text" className="form-control border-0" placeholder="Search" />
                        </div>
                    </form>
                </li>
                <li className="pt-2 pb-1">
                    <span className="nav-item-head">Template Pages</span>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="mdi mdi-compass-outline menu-icon"></i>
                        {/* <span className="menu-title">Dashboard</span> */}
                        <li><Link to="/">Dashboard</Link></li>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link">
                        <i className="mdi mdi-contacts menu-icon"></i>
                        {/* <span className="menu-title">Users</span> */}
                        <li><Link to="/users">Users</Link></li>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/forms/basic_elements.html">
                        <i className="mdi mdi-format-list-bulleted menu-icon"></i>
                        {/* <span className="menu-title">Categories</span> */}
                        <li><Link to="/categories">Categories</Link></li>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/charts/chartjs.html">
                        <i className="mdi mdi-chart-bar menu-icon"></i>
                        {/* <span className="menu-title">Events</span> */}
                        <li><Link to="/events">Events</Link></li>
                    </a>
                </li>

                <li className="nav-item pt-3">
                    <a className="nav-link" href="http://bootstrapdash.com/demo/plus-free/documentation/documentation.html"
                        target="_blank">
                        <i className="mdi mdi-file-document-box menu-icon"></i>
                        {/* <span className="menu-title">Logout</span> */}
                        <li><Link to="/logout">Logout</Link></li>
                    </a>
                </li>
            </ul>
        </nav>
    )


}

export default Navbar;