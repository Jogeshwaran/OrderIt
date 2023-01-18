import Skeleton from "react-loading-skeleton"

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
                        <li>Home </li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        )
    }

export default HeaderComponent;