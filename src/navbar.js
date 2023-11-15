import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom";
import UserService from "./services/UserService";

function Navbar() {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [password, setpassword] = useState("")
    const [adress, setadress] = useState("")
    const [phone, setphone] = useState("")
    const [photo, setphoto] = useState("")
    const [email, setemail] = useState("")
    const [cin, setcin] = useState("")
    const [role, setrole] = useState("")
    const iduser = localStorage.getItem("resultID")
    const navigate = useNavigate()
    const us = new UserService();
    useEffect(() => {
        getadmin(iduser)
    }, [])

    const getadmin = (iduser) => {
        us.findByid(iduser).then((res) => {
            //
            console.log("details admin", res.data.data);
            if (res.data.data) {

                setfirstname(res.data.data.firstname);
                setlastname(res.data.data.lastname);
                setpassword(res.data.data.password);
                setadress(res.data.data.adress);
                setphone(res.data.data.phone);
                setemail(res.data.data.email);
                setcin(res.data.data.cin);
                setphoto(res.data.data.photo)
                // setadress(res.data.data.adresse);
                setrole(res.data.data.role);
            }

        })
    }
    return (


        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile border-bottom">
                    <a href="#" className="nav-link flex-column">
                        <div className="nav-profile-image">

                            <img src={`http://localhost:3000/storages/${photo}`} alt="" />

                        </div>
                        <div className="nav-profile-text d-flex ms-0 mb-3 flex-column">
                            <span className="font-weight-semibold mb-1 mt-2 text-center">{firstname}</span>
                            <span className="text-secondary icon-sm text-center">{cin}</span>
                        </div>
                    </a>
                </li>
                <li className="nav-item pt-3">
                    <a className="nav-link d-block" href="index.html">

                        <div className="small font-weight-light pt-1">{email}</div>
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