import React,{useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import '../../App.css';
import { useSelector } from 'react-redux';

// import AddTarget from '../links/AddTarget'


export default function MyUrl(){
    let [links, setLinks] = useState([])
    let linksFromRedux = useSelector()
    const token = localStorage.getItem("accessToken")
    const email = localStorage.getItem("email")

    console.log("MyUrltoken",token)
    useEffect(() => {

       if(token!=null && token!=undefined && !email){
      //  axios.get(`http://localhost:3000/users/getlinks/${email}`,{headers:{Authorization: `Bearer ${token}`}})
      //  .then(res=>{
      //   console.log('res',res)
      //   setLinks(res.data)
      //  })
      //  .catch(console.log('error useEffect of myurl'))
    }
      
    },[])
    const deleteLink = (id) => {
        axios.delete(`http://localhost:3000/links/${id}`,{headers:{Authorization: `Bearer ${token}`}})
        .then(res=>{console.log("res",res);
        console.log("Successfully deleted");
            //   setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
       setLinks(res.data);
    })
    .catch(console.log('error delete'))
    }
    return(
        <>
      <center>
        <h1 style={{margin:"auto",color:"#660066"}}>Your recent TinyURLs</h1><br/>
        <hr />
        <br/><br/><br/>
        <ul>
            {links.map((item)=><li>{item.link}
            <IconButton  target="_blank" onClick={()=>{deleteLink(item.id)}}>
             <DeleteOutlineIcon />
            </IconButton>
            </li>)}
        </ul>
        
        <br/><br/>
        </center>
          {/* <h1>All your TinyUrl</h1> */}
          {/* <ul class="no-bullets">
            {links.map((item)=><li>{item.link}
            <IconButton  target="_blank" onClick={()=>{deleteLink(item.id)}}>
             <DeleteOutlineIcon />
            </IconButton> */}
            {/* <IconButton  target="_blank" onClick={()=>{routerTarget(item.id)}}>
             <EditIcon />
            </IconButton> */}
            {/* <input type="button" value="מחק" onClick={()=>{deleteLink(item.id)}}></input> */}
            {/* <input type="button" value="ערוך" onClick={()=>{updatelink(item.id)}}></input> */}
            {/* </li>)}
          </ul> */}
        </>
    )
}
// // import {getAllLinks} from './fun';
// import Url from './Url'
// import react,{useEffect} from 'react'
// import axios from 'axios';
// import { useState } from 'react';

// const MyUrl = () => {
//     // const allUrl= functions.getAllLinks();
//     // console.log("=======================",allUrl)
//     // async function getLinks()
//     // {
//     //  const  links =  getAllLinks();
//     //     // setLinks(links);
//     //     console.log(links)
//     // }
//     const [links, setLinks] = useState([]);
//     const  getAllLinks=async () => {
//         console.log('myurl');
//        const result = await axios.get(`http://loaclhost:3000/links`)
//        console.log("uyi"+result.data)
//        setLinks(result.data)
//        return result.data;
//     }
//     useEffect(()=>{
//         getAllLinks();
//     },[]);
//     return(
//         <>
//         <p>yiy</p>
//            {links.map((i)=><Url urlShow={i}></Url>)}

//         </>
//     )
// }
// export default MyUrl;
    
