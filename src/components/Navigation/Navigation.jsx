import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function Navigation() {
    
  const IsLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {IsLoggedIn && <NavLink to="/contacts">ContactsBook</NavLink>}
            
        </nav>
    )
}