import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";



export default function UserMenu() {
    
const user = useSelector(selectUser)
    return (
        <div>
            <p>Welcom {user.name}</p>
            <button type="button"> Logout</button>
        </div>
    )
}