import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserForm = (errors, touched) => {

    return(
        
        <Form>
            <h3>Name:</h3>
            <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type="text" name="name" placeholder="Name"/>
            </div>
            <h3>Email:</h3>
                <Field type="text" name="email" placeholder="Email"/>
            <h3>Password:</h3>
                <Field type="text" name="password" placeholder="Password"/>
            <h3>I Agree to ToS</h3>
                <Field type="checkbox" name="tos"/>
            <button>Submit!</button>
        </Form>
        
    )
}

const FormikUserForm = withFormik({

    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required(),
        email: Yup.string()
        .email()
        .required(),
        password: Yup.string()
            .min(6)
            .required(),
        tos: Yup.bool()
            .required()
    }),

    handleSubmit(values) {
        console.log(values)
    }
})(UserForm);

export default FormikUserForm;