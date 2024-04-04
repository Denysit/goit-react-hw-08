import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css"
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {

  const IsLoggedIn = useSelector(selectIsLoggedIn)
    
    return (
        <header className={css.header}>
            <Navigation />
            {IsLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}