// const heading = document.createElement("h1")
// heading.innerHTML = "Hello World"
// const root = document.getElementById("root")
// root.appendChild(heading)

import React, { Fragment } from "react";
import ReactDOM from 'react-dom/client';
//Named import
import{ Title }from "./components/Header";
//Default Import
import HeaderComponent from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import ShimmerUi from "./components/ShimmerUi";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from './components/ContactUs';
import RestaurantMenuPage from "./components/RestaurantMenuPage";
// -----------
//Import two three or more from the file and use it as a object
//import * as Xyz from './components/Header'
//-------------------
// const heading = React.createElement("h1",{},"Hello World!!!")
 
/*inline style in react */

// const hsx = (
//     <div style={{backgroundColor : "red", display:"flex"}}>
//         <h1>Hello</h1>
//         <h2>World</h2>
//     </div>
// )

/* 

*/

//App layout i.e what the whole app contains in a page
 /* 
    Header
    -logo
    -nav items
    -cart
    Body
     - search 
     -restraunt list
         -restaurant cards
            -> image
            -> Name
            -> cuisine
            -> rating
    Footer
     -links
     -copyright
    */

const AppLayout = () => {
    return(
    <Fragment>
    <HeaderComponent /> 
    {/* <About />//render if path is /about
    <Body />//render if path is /
    <ContactUs /> */}
    {/* Outlet*/}
    <Outlet />
    <Footer />
    </Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element : <AppLayout />,
        errorElement: <Error />,
        children : [
            {
            path : "/",
            element : <Body />
        },
        {
            path : "/about",
            element : <About />
        },
        {
            path: "/contact",
            element : <ContactUs />
        },
        {
            path: "/restaurant/:id", //id is dynamic takes any values
            element : <RestaurantMenuPage />
        }
    
    ]
    }
])



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

//Instead of Loading app layout everytime we render, 
//we give router provider component and pass app router so that It will render according to the path
