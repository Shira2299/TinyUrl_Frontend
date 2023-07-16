import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Status from './Status';
import FormLabel from '@mui/material/FormLabel';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { ADD_USER } from './redux/actionsType';
import {addUser} from './redux/actions/user';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import {saveAllUser} from './redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, removeMessage } from './redux/actions/message.js';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { Token } from '@mui/icons-material';

export default function InputWithIcon({setFlag,flag}) {
  const [error, setError] = useState(null);
  const [name,setUserName]=useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");//localStorage לא קולט אותו למה??????
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  //  check if finally i need it
  // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };

  let users = useSelector(p=>p.user.arrUser)
  let dis = useDispatch()

  const func=()=> {
     console.log('enter func signUp',name,email,password);
    // axios.post("https://tinyurl-3340.onrender.com/users",{name,email,password}).then(res=>{
      axios.post(`http://localhost:3000/auth`,{name,email,password}).then(res=>{
        setFlag(!flag);
        console.log(res.data);
      console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",res.data.id);
      console.log("res.data.accessToken",res.data.accessToken);
        dis(addUser(res.data))
       localStorage.setItem('userName',name);
       localStorage.setItem('email',email);
       localStorage.setItem('password',password);
      //  localStorage.setItem('id',res.data.id);
       localStorage.setItem('accessToken',res.data.accessToken);
       window.location.reload(); // Refresh the page (for logout)

    }).catch(error=>{
        // dis(addMessage({id:1, header:"אירעה תקלה בעת הגישה לשרת", code:err.code}))
        setError(error.response.data)
        setTimeout(() => {
            dis(removeMessage())
        },2000)
    })
  } 
  return (
    <Box component="form" onSubmit={func} noValidate sx={{ '& > :not(style)': { m: 1 } }}>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }} >
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Name" variant="standard" onChange={(event) => setUserName(event.target.value)}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="E-Mail Address" variant="standard" onChange={(event) => setEmail(event.target.value)}/>
      </Box>
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
      <Grid item xs={12} sm={12}> {error&&<Alert severity="error" >{error}</Alert>}</Grid>
      {/* <Grid item xs={12} sm={12}>
        {!name||!email||!password}?
        <Alert severity="error">{error}</Alert>
      </Grid> */}
      {/* <Grid item xs={12} sm={12}>
         {error ? (
         <Alert severity="error">{error}</Alert>
         ) : (
          <Alert severity="success"></Alert>
         )}
        </Grid> */}
      <input type="button"className='' value="Sign up" onClick={func}/>
    </Box>     
  );
}


