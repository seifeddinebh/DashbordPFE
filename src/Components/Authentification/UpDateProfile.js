
import React, { useState, useEffect } from "react";
// import Menu from "./menu";
// import Footer from "./footer";
// import UserService from "../services/UserService";
import UserService from "../../services/UserService"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";





function UpDateProfile() {
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
    var userID = localStorage.getItem("resultID")
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
        navigate("/registerDetails/" + userID)

    }


    return (

        <body>


            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>UpDate</h3>

                        </div>
                    </div>
                </div>
            </div>



            <div className="contact-page section">
                <div className="container">

                    <div className="col-lg-6">
                        <div className="right-content">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1> upDate </h1>
                                    <br></br>
                                    <br></br>
                                    <form id="contact-form" action="" method="post">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input type="name"
                                                        name="name" id="name"
                                                        placeholder="Your First Name..."
                                                        autocomplete="on" required
                                                        value={firstname}
                                                        onChange={(e) => setfirstname(e.target.value)}
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input type="surname"
                                                        name="surname"
                                                        id="surname"
                                                        placeholder="Your Last Name..."
                                                        autocomplete="on" required
                                                        value={lastname}
                                                        onChange={(e) => setlastname(e.target.value)}

                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input type="text"
                                                        name="email"
                                                        id="email"
                                                        pattern="[^ @]*@[^ @]*"
                                                        placeholder="Your E-mail..."
                                                        required=""
                                                        value={email}
                                                        onChange={(e) => setemail(e.target.value)}

                                                    />
                                                </fieldset>
                                            </div>
                                            {/* <div className="col-lg-6">
                                                <fieldset>
                                                    <input type="subject"
                                                        name="subject"
                                                        id="subject"
                                                        placeholder="Your Password..."
                                                        autocomplete="on"
                                                        required=""
                                                        value={password}
                                                        onChange={(e) => setpassword(e.target.value)} />
                                                </fieldset>
                                            </div> */}
                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input type="subject"
                                                        name="subject"
                                                        id="subject"
                                                        placeholder="Your CIN..."
                                                        autocomplete="on"
                                                        required=""
                                                        value={cin}
                                                        onChange={(e) => setcin(e.target.value)}

                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input type="subject"
                                                        name="subject"
                                                        id="subject"
                                                        placeholder="Your Phone..."
                                                        autocomplete="on"
                                                        required=""
                                                        value={phone}
                                                        onChange={(e) => setphone(e.target.value)}


                                                    />
                                                </fieldset>
                                            </div>

                                            <div className="col-lg-6">
                                                <fieldset>
                                                    <input type="subject"
                                                        name="subject"
                                                        id="subject"
                                                        placeholder="Your Adress..."
                                                        autocomplete="on"
                                                        required=""
                                                        value={adress}
                                                        onChange={(e) => setadress(e.target.value)}


                                                    />
                                                </fieldset>
                                            </div>



                                            <div className="col-lg-6">
                                                <fieldset>


                                                    <label for="cars">Choose a Role:</label>
                                                    <select id="cars" name="cars"
                                                        value={role}
                                                        onChange={(e) => setrole(e.target.value)}

                                                    >
                                                        <option >Role</option>
                                                        <option value="admin">Admin</option>
                                                        <option value="Organizer">Organizer</option>

                                                    </select>
                                                </fieldset>


                                            </div>

                                            <br></br>

                                            <div className="col-lg-6">
                                                <fieldset>

                                                    <input type="file" required="" onChange={onFileChange}


                                                    />
                                                </fieldset>
                                            </div>





                                            {/* <div className="col-lg-12">
                                        <fieldset>
                                            <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                        </fieldset>
                                    </div> */}
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <button onClick={(e) => UpDateFunction(e)} type="submit" id="form-submit" className="orange-button">UpDate</button>
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

        </body>
    )

}
export default UpDateProfile