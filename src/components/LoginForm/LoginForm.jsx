import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css'

export default function LoginForm() {

    const dispatch = useDispatch();

    const handleSabmit = (values, action) => {
        dispatch(login(values))
        action.resetForm();
    }

    return (
        <Formik
            initialValues={
            { email: "", password: "" } }
             onSubmit={handleSabmit}>
           <Form className={css.formContainer}>
        <div className={css.formField}>
          <label htmlFor="email" className={css.formLabel}>Email</label>
          <Field type="email" id="email" name="email" className={css.formInput} />
        </div>
        
        <div className={css.formField}>
          <label htmlFor="password" className={css.formLabel}>Password</label>
          <Field type="password" id="password" name="password" className={css.formInput} />
        </div>
        <button type="submit" className={css.formButton}>Log in</button>
      </Form>
        </Formik>
    )
}