import * as React from 'react';
import "./TinyUrl.css"
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, removeMessage } from './redux/actions/message.js';
import axios  from 'axios';
import {useState} from 'react';
import { addLink } from './redux/actions/link';
import SignUpOpen from './SignUpOpen';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


export default function AddUrl(){
    const [orginalUrl,setOrginalUrl]=useState("");
    const [newUrl,setNewUrl] = useState("");
    const [uniqueName,setUniqueName] = useState("");
    const[flag,setFlag]=useState(false);
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState('Default Title');
    let users = useSelector(p=>p.user.arrUser)
    let dis = useDispatch()

    const func = () => {     
      console.log("enter func Login");
      if(!orginalUrl&&!newUrl)
     {
      console.log('orginalUrl',orginalUrl);
      return;
     }
     if(localStorage.getItem('email')!==null)
     {  
      // axios.post("https://tinyurl-3340.onrender.com/links",{orginalUrl,newUrl}).then(res=>{//add by id
      console.log('orginalUrl',orginalUrl);
      console.log('newUrl',newUrl);
      const token=localStorage.getItem("accessToken")
      console.log(token);
      // axios.post(`http://localhost:3000/links/`,{data:{"orginalUrl":orginalUrl,"newUrl":newUrl},headers:{Authorization: `bearer ${token}`}})
      axios.post(`http://tinyb.onrender.com/links/`,{orginalUrl,newUrl},{headers:{Authorization: `bearer ${token}`}})
      .then(res=>{
         console.log('after'+res.data.orginalUrl);
         dis(addLink(res.data))       
          setUniqueName("http://tinyb.onrender.com/"+res.data.newUrl,{headers:{Authorization: `bearer ${token}`}});
        handleClick();
          const mail = localStorage.getItem("email");
          const word = newUrl;
          console.log('word',word);
          axios.get(`http://tinyb.onrender.com/mail/${mail}/${word}`,{headers:{Authorization: `bearer ${token}`}})
      }).catch(err=>{
          dis(addMessage({id:1, header:"אירעה תקלה בעת הגישה לשרת", code:err.code}))
  
          setTimeout(() => {
              dis(removeMessage())
          },2000)
      })
      console.log('========');}
      else
      {
         setFlag(true)          
      }  
    }

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
    
    // const copy = async () => {
    //   await navigator.clipboard.writeText(uniqueName);
    // }
      // const copy = async () =>{
      //   await navigator.writeText(uniqueName);
      // }
      const c = () =>{
        setTitle("copied")
        setTimeout(()=>setTitle("copy"),2000);
        
      }
      const reset = () => {
        setOrginalUrl("");
        setNewUrl("");
        setUniqueName("");
      };
    return(
        <>    
        <div className="login">           
             <div className='loginDiv'><br/>
                 <form action="/action_page.php">
                  <label style={{fontFamily:"revert"}}>Enter a long URL to make a TinyURL</label>
                       <input type="text" className='loginText' id="fname" name="firstname1" placeholder="orginal URL.." onChange={(event) => setOrginalUrl(event.target.value)} value={orginalUrl}/>
                       <input type="text" className='loginText' id="newUrl" name="firstname2" placeholder="alias" onChange={(event) => setNewUrl(event.target.value)} value={newUrl}/>
                       <input type="button"className='loginSubmit' value="Make TinyURL!" onClick={func}/><br/>
                       <Snackbar
                       open={open}
                       autoHideDuration={6000}
                       onClose={handleClose}
                       message="Send to your email"
                       action={action}
                       />
                       <div className='copy'>
                       <input type="text" className='loginText' placeholder="Tiny URL" value={uniqueName}  />
                       {/* <button onCopy={c} disabled={!uniqueName} style={{margin:"5px",height:"5vh",marginTop:"7.5%"}}><ContentCopyIcon/></button> */}
                       </div>                     
                  </form>
                  <input type="button" className="loginSubmit" value="Reset" onClick={reset} /><br /><br />
             </div>
                  {flag&&<SignUpOpen flag={flag} setFlag={setFlag}/>}
          </div>          
        </>
    )
}
<ModeEditIcon/> 