import Signup from "./components/Signup";
import { useFormik, Form, Formik, Field } from "formik";
import validationSchema from "./validation";


function Signup() {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema,
    });

    return (
        <div>
            <h1> Sign Up </h1>
            <Formik> {
                <Form onSubmit={Formik.handleSubmit} >
                    <label htmlFor="email" > Email </label> 
                    <Field values={values.email}
                            name="email"
                            onChange={handleChange}
                    />

                        <br /> <br/>

                        <
            label > Password < /label> <
                                Field values={values.password}
                                name="password"
                                onChange={handleChange}
                            />

                            <
                                br /> < br />

                            <
            label > Password Confirm < /label> <
                                    Field values={values.passwordConfirm}
                                    name="passwordConfirm"
                                    onChange={handleChange}
                                />

                                <
                                    br /> < br />
                                <
            button type="submit" > Submit < /button>

                                    <
                                        br /> < br /> {JSON.stringify(values)} <
            /Form>

        } <
        /Formik> < /
        div >
                                    )
};
                                    export default Signup;