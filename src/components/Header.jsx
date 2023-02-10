import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"
import Title from "./Title"
//REact Element 
const HeaderComponent = () => {
    const {user,setUser} = useContext(UserContext)
        return(
            <div className="header"  >
                <Title />
                <input type="text" value={user.name} onChange={e => setUser({...user,name : e.target.value})} />
                <div className="nav-items">
                    <ul>
                       <Link to="/"><li>Home </li></Link> 
                       <Link to="/about"><li>About Us</li></Link> 
                       <Link to="/contact"><li>Contact Us</li></Link>  
                       <Link to="/instamart"><li>Instamart</li></Link>                       
                    </ul>
                </div>
                <div className= "login">
                    <Link to = "/login">Login</Link>
                </div>
            </div>
        )
    }

export default HeaderComponent;

