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
    <Body />

    <Footer />
    </Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
