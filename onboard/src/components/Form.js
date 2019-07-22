import React from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const UserForm = (errors, touched) => {

    return(
        
        <Form>
            <div>
            <h3>Name:</h3>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type="text" name="name" placeholder="Name"/>
            </div>
            <div>
            <h3>Email:</h3>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type="text" name="email" placeholder="Email"/>
            </div>
            <div>
            <h3>Password:</h3>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="text" name="password" placeholder="Password"/>
            </div>
            <div>
            <h3>I Agree to ToS</h3>
                {touched.tos && errors.tos && <p>{errors.tos}</p>}
                <Field type="checkbox" name="tos"/>
            </div>
            <button type="submit">Submit!</button>
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
            .required("You must have a name"),
        email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be 6 characters or longer")
            .required("Password is required"),
        tos: Yup.bool()
            .required("You must agree to the Terms of Service")
    }),

    handleSubmit(values) {
        console.log(values)
    }
})(UserForm);

export default FormikUserForm;