import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import {useForm} from 'react-hook-form';
import { useState } from "react";
// import { FiEye } from "react-icons/fi";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, removeMessage } from './redux/actions/message.js';
import axios from 'axios';

 const SignIn = ({setFlag,flag}) => {
   
// const [name,setUserName]=useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [error, setError] = useState(null);
const [showPassword, setShowPassword] = React.useState(false);
const handleClickShowPassword = () => setShowPassword((show) => !show);  

let dis = useDispatch();

const funcSignIn=()=> {
//  axios.get('http://localhost:3000/users',{name,email,password}).then(res=>{
  // axios.get('http://localhost:3000/auth/${email}/${password}').then(res=>{
    if(email&&password){
    axios.get(`http://localhost:3000/auth/${email}/${password}`).then(res=>{
    setFlag(!flag);
    console.log('res.data',res.data);   
    localStorage.setItem('name',res.data.name);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    localStorage.setItem('accessToken',res.data.accessToken);
    window.location.reload(); // Refresh the page (for logout)
  }).catch(error=>{setError(error.response.data)
    console.log(error.response.data)})
  }
}
    return ( 
        <>
         <Box component="form"  noValidate sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="E-Mail Address" variant="standard" onChange={(event) => setEmail(event.target.value)}/>
      </Box>
      <Grid item xs={12} sm={12}> {error=="The email is wrong" &&<Alert severity="error" >{error}</Alert>}</Grid>
      <Box>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password" >Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(event) => setPassword(event.target.value)}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"                 
                  onClick={handleClickShowPassword}
                  //  check if finally i need it                
                  // onMouseDown={handleMouseDownPassword}
                
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
               
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Grid item xs={12} sm={12}> {error=="The password is wrong" &&<Alert severity="error" >{error}</Alert>}</Grid>
      <Grid item xs={12} sm={12}>
      {!email || !password && (
       <Alert severity="error">
       Data missing
      </Alert>
       )}
      </Grid>
      {/* {!email||!password{<Grid item xs={12} sm={12}> {error=="Data missing" &&<Alert severity="error" >{error}</Alert>}</Grid>}} */}
      <input type="button" className='' value="Sign in" onClick={funcSignIn}/>
    </Box>     
        </>
     );
}
 
export default SignIn;
