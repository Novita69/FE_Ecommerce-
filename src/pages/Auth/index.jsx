import { React, useState } from "react";
import { Card, Row, Col } from "reactstrap";
import Login from './login'
import Register from "./register";


const AuthPages = () => {

    const [currentContainer, setCurrentContainer] = useState(false);

    return (
        <div className={`auth-pages`}>

            <Row>
                <Col md="12" lg="6">
                    <div className="background bg-left">

                        <p>Simple CRUD React JS</p>

                    </div>


                </Col>

                <Col md="12" lg="6">

                    <div className="card-auth-page">
                        <div className={`card-inner`}>
                            {
                                currentContainer ?
                                    <div className={`card-register`}>

                                        <h2>Sign Up</h2>
                                        <Register />
                                        <a href="!#" onClick={() => setCurrentContainer(false)}>Already have an account ?</a> 

                                    </div>

                                    :

                                    <div className={`card-login`}>
                                        <h2>Login</h2>
                                        <Login />
                                        <a href="!#" onClick={() => setCurrentContainer(true)}>Create Account</a>
                                    </div>

                            }

                        </div>

                    </div>


                </Col>
            </Row>


            {/* <Register /> */}

        </div>
    )
}


export default AuthPages;