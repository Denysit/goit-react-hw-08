import { Formik, Form, Field } from 'formik';
import css from "./RegisterForm.module.css"
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export default function RegisterForm() {

    const dispatch = useDispatch()
    
    const handleSabmit = (values, action) => {
        dispatch(register(values))
        action.resetForm();
    };


    return (
        <Formik
            initialValues={
                {
                    name: "",
                    email: "",
                    password: ""
                }}
            onSubmit={handleSabmit}>
            <Form className={css.registration_form} autoComplete='off'>
    <label htmlFor="name" className={css.label}>Username</label>
    <Field type="text" name="name" className={css.input} />

    <label htmlFor="email" className={css.label}>Email</label>
    <Field type="email" name="email" className={css.input} />
    
    <label htmlFor="password" className={css.label}>Password</label>
    <Field type="password" name="password" className={css.input} />
    
    <button type="submit" className={css.submitButton}>Submit</button>
</Form>

        </Formik>
    );
}