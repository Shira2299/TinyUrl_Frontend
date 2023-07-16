import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveAllLink } from './redux/actions/link';
import { addMessage, removeMessage } from './redux/actions/message';
import Url from './Url';
import './TinyUrl.css';

const password=localStorage.getItem("password");
const LinkList = () => {// שם של קומפוננהט באות גדולה..

    let links = useSelector(p=>p.link.arrLink)
    let users = useSelector(u=>u.user.arrUser)
    let dis = useDispatch()
    // const name =   localStorage.setItem('userName',name);
    // const [userName, setName] = useState("");

    // useEffect(() => {
    //   localStorage.setItem('userName', JSON.stringify(userName));
    // }, [userName]);
    // const token=localStorage.getItem("accessToken");
    // console.log("LinkList token",token);
    // useEffect(()=> {
    // // axios.get("https://tinyurl-3340.onrender.com/links",{headers:localStorage.getItem("accessToken")}).then(res=>{
    //     console.log('LinkList');
    //     axios.get("http://localhost:3000/links",{headers:{Authorization: 'Bearer ${token}' }}).then(res=>{//{headers:localStorage.getItem("accessToken")}
        
    //     dis(saveAllLink(res.data))
    // }).catch(err=>{
    //     dis(addMessage({id:1, header:"אירעה תקלה בעת הגישה לשרת", code:err.code}))

    //     setTimeout(() => {
    //         dis(removeMessage())
    //     },2000)
    // })}
    //  ,[])

    return(
        <>
        <center>
        <h1 style={{margin:"auto",color:"#660066"}}>Your recent TinyURLs</h1><br/>
        <hr style={{color:"red"}}/>
        <br/><br/><br/>
        {/* <h2>Wellcome to {userName}</h2><p>{userName.JSON}</p> */}
        
        <ul>
            {/* {password&&links.map((i)=><Url urlShow={i}></Url>)}  */}
        </ul>
        <br/><br/>
        </center>
        </>
    )
} 

export default LinkList;