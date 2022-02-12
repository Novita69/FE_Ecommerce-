import React from "react";
import {
    Button,
    Container,
    FormFeedback,
    Input
} from "reactstrap";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    username: yup.string().min(8).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    retypePassword: yup.string().oneOf([yup.ref('password'), null], 'Password Not Match'),
    address: yup.string().required(),
    phoneNumber: yup.number().required(),
    joinDate: yup.string().required()
})

const Register = () => {

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            retypePassword: "",
            address: "",
            phoneNumber: "",
            joinDate: ""
            
        },

        validationSchema: validationSchema,
        onSubmit: () => handleRegister()
    })

    const handleRegister = () => {
        alert("Register Successful!")
    }

    console.log(
        formik.values
    );
    return (
        <Container className="container-register">

            Register Pages
            <form onSubmit={formik.handleSubmit}>
                {
                    Object.keys(formik.initialValues).map((key, idx) => (
                        <div key={idx} className="row-input">
                            <Input
                                type={key === "password" || key === "retypePassword" ? "password" : "text"}
                                id={key}
                                placeholder={key}
                                value={formik.values[key]}
                                onChange={formik.handleChange}
                                invalid={formik.touched[key] && Boolean(formik.errors[key])}
                            />

                            {
                                formik.touched[key] && Boolean(formik.errors[key]) &&
                                <FormFeedback className="error-feedback">{formik.errors[key]}</FormFeedback>
                            }

                        </div>
                    ))


                }

                <Button className="btn-submit" type="submit">
                    Register
                </Button>

            </form>

        </Container>
    )
}


export default Register;