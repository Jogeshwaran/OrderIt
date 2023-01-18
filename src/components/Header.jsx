import { Link } from "react-router-dom"
//REact Element 
export const Title = () => {
    return(
       // <h1 id = "title">OrderIt</h1>
       <a  href="/">
       <img className="logo" alt="logo" src="https://www.orderit.today/img/svg/logo.png"/>
       </a>
   )
    }


 const HeaderComponent = () => {
        return(
            <div className="header"  >
                <Title />
                <div className="nav-items">
                    <ul>
                       <Link to="/"><li>Home </li></Link> 
                       <Link to="/about"><li>About Us</li></Link> 
                       <Link to="/contact"><li>Contact Us</li></Link>                         <li>Cart</li>
                    </ul>
                </div>
            </div>
        )
    }

export default HeaderComponent;