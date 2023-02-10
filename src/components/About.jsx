import { Outlet } from "react-router-dom";

const About = () => {
    return(
        <div>
            <h1>Hello from About</h1>
            <Outlet/>
        </div>
    )
}

export default About;