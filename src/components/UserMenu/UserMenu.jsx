import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations.js"



export default function UserMenu() {
    
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const handleClick = () => {
        dispatch(logOut())
    }
    return (
        <div>
            <p>Welcom {user.name}</p>
            <button type="button" onClick={handleClick}> Logout</button>
        </div>
    )
}