import React, { useEffect } from "react"
import "./Componnent/TinyUrl.css"
import Login from "./Componnent/Login"
import Text from "./Componnent/Text"
import Service from "./Componnent/Service"
import SwipeableTemporaryDrawer from './Componnent/SwipeableTemporaryDrawer'
import SimpleBottomNavigation from "./Componnent/SimpleBottomNavigation";
import SignUp from './Componnent/SignUp';


<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>


const TinyUrl = () =>{
//  useEffect(()=>{//בעת ריענון הדף מוחק מה localstorage
//    localStorage.clear();
//  },[])
    
  return(
        <>
      
        <div className="flex">
           <h1 className="h1">TinyUrl</h1>
           
        <SimpleBottomNavigation className="SimpleBottomNavigation"/>
         {/* <SwipeableTemporaryDrawer/> */}
        {/* <ul>
          <li><a class="active" href="#home">My URLs</a></li>
          <li><a href="#news">Plans</a></li>
          <li>
            <a href="#contact" >Sign Up</a>
           
            </li>
          <li><a href="#about">Sign In</a></li>
        </ul> */}
        </div>
       
       
        <div className="flex">
         {/* <SignUp></SignUp> */}
         <div className="log">
        <Login />
        </div>
        <Text/>
         {/* <Service/> */}
        </div>
      
      
        </>
    )
}


export default TinyUrl;