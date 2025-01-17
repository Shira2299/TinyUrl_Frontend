import * as React from 'react';
import Alert from '@mui/material/Alert';
import { useState } from "react";
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
import axios from 'axios';

 const SignIn = ({setFlag,flag}) => {
   
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [error, setError] = useState(null);
const [showPassword, setShowPassword] = React.useState(false);
const handleClickShowPassword = () => setShowPassword((show) => !show);  

const funcSignIn=()=> {
//  axios.get('http://localhost:3000/users',{name,email,password}).then(res=>{
  // axios.get('http://localhost:3000/auth/${email}/${password}').then(res=>{
  console.log('enter funcSignIn'); 
    if(email&&password){
       console.log('enter if'); 
       console.log('https://tinyb.onrender.com/auth/${email}/${password}'); 
    axios.get(`https://tinyb.onrender.com/auth/${email}/${password}`).then(res=>{
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
      <input type="button" className='sign' value="Sign in" onClick={funcSignIn}/>
    </Box>     
        </>
     );
}
 
export default SignIn;
