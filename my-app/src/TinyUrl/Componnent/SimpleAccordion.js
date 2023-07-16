// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import {saveAllLink} from './redux/actions/link.js'
// import { addMessage, removeMessage } from './redux/actions/message.js';
// import Url from './Url'

// export default function SimpleAccordion() {
    
//     let links = useSelector(p=>p.link.arrLink)
//     let dis = useDispatch()

//     useEffect(()=> {//היה חסר סוגריים עוטפות לפונקציה..
//     axios.get("http://localhost:3000/links").then(res=>{
//         dis(saveAllLink(res.data))
//     }).catch(err=>{
//         dis(addMessage({id:1, header:"אירעה תקלה בעת הגישה לשרת", code:err.code}))

//         setTimeout(() => {
//             dis(removeMessage())
//         },2000)
//     })}
//     ,[])
//   return (
//      <>
//      <div className="DivMyUr">My Url</div>
//   <div>
//         {links.map((i)=><Url urlShow={i}></Url>)}       
//     </div>
//      </>
  
//   );
// }