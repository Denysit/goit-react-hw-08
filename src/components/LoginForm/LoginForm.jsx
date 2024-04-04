import {Formik, Form, Field} from 'formik';

export default function LoginForm() {

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, action) => {
                action.resetForm();
            }}>
            <Form>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />
                
                <button type="submit">Log in</button>
 
            </Form>

        </Formik>
    )
}