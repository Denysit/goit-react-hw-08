import { useSelector } from "react-redux";
import PageTitle from "../components/PageTitle";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { selectError } from "../redux/auth/selectors";

export default function Registration() {
    
 const error =  useSelector(selectError)

    return (
        <div>
            <PageTitle>Register your account</PageTitle>
            <RegisterForm />
            {error && <h2>Error validation, please try again</h2>}
        </div>
    )
}