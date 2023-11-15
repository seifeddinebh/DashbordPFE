import React, { useState, useEffect } from "react";
import Footer from "./footer";
//import UserService from "../services/UserService";
import LoginService from "../src/services/LoginService";
import { useNavigate } from "react-router-dom";


function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    //const US = new UserService()
    const LS = new LoginService()
    const navigate = useNavigate()

    const LoginFunction = (e) => {
        e.preventDefault();

        const data = { //?? mnin yjib fel email w PWD
            email: email,
            password: password
        }
        var resultToken;

        console.log(data);
        LS.Login(data).then((res) => {
            if (res.status != 200) { navigate("/notfound") }
            // console.log("*******token******", res.data.message.token)
            console.log("*******res.data.message.user._id******", res.data.message.user._id)
            if (res.data.message.token != null) { // pour koi ces 2 instructions
                resultToken = res.data.message.token;
                localStorage.setItem("resultID", res.data.message.user._id);// cha3malna behom resultID
                localStorage.setItem("resultToken", res.data.message.token);// cha3malna behom tesultToken
                localStorage.setItem("Nom", res.data.message.user.firstname);// cha3malna behom tesultToken
               // localStorage.setItem("photo",res.data.data.user.photo)
                //  alert(resultID);

                console.log("*******res.data.message.user******", res.data.message.user)
                if (res.data.message.user.role == "admin")
                    navigate("/home")
                else if (res.data.message.user.role == "Organizer")
                    navigate("/Dashbodorganisateur")
            }
            //code 
            else { navigate("/notfound") }
        })



    }
    return (



        <div className="contact-page section">
            <div className="container">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div className="col-lg-8 offset-4">
                    <div className="right-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1> Login </h1>
                                <br></br>
                                <br></br>
                                <form id="contact-form" >
                                    <div className="row">

                                        <div className="row">


                                            <div class="mb-3">
                                                <label for="formFile" class="form-label">Email</label>
                                                <input class="form-control" placeholder="email..." type="email" id="formFile" value={email}
                                                    onChange={(e) => setemail(e.target.value)} />
                                            </div>

                                        </div>

                                        <br></br>
                                        <div className="row">

                                            <div class="mb-3">
                                                <label for="formFile" class="form-label">Password</label>
                                                <input class="form-control" placeholder="Password..." type="password" id="formFile" value={password}
                                                    onChange={(e) => setpassword(e.target.value)} />
                                            </div>
                                        </div>


                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button onClick={(e) => LoginFunction(e)} id="form-submit" className="btn btn-primary">Login</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <br></br>
            <br></br>
            <br></br>

            {/* <Footer></Footer> */}
        </div>
    )
}

export default Login