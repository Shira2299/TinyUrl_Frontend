//import react,{useEffect} from 'react'
import{ useEffect } from 'react';
import axios from 'axios';

const AddUsers = async (name,email,password) => {
   
    await axios.post(`https://tinyurl-zi0y.onrender.com/users`,{name,email,password})
    
    useEffect(()=>{
        AddUser();
    },[]);
    return(
        <>
        </>
    )
}

export default AddUsers;



// const  getAllLinks=async () => {
//     const result = await axios.get(`http://localhost:3000/links`)
//     console.log("uyi"+result.data)
//     return result.data;
//  }
// useEffect(()=>{
//     getAllLinks();
// },[])