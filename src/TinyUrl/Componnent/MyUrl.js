import React,{useEffect, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import pic from '../../pic/close.jpg';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import axios from 'axios';
import '../../App.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import './TinyUrl.css';
import RestoreIcon from '@mui/icons-material/Restore';
import { useSelector } from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { deepGreen, deepPurple, green } from '@mui/material/colors';

export default function MyUrl() {
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({
 
    right: false,
  });
  let [links, setLinks] = useState([])
  const [targetParamKey, setTargetParamKey] = useState("");
  const [nameT, setNameT] = useState("");
  const [valueT, setValueT] = useState("");
  // const [sendTarget, setSendTarget] = useState("");
  const [open, setOpen] = React.useState(false);
  const token = localStorage.getItem("accessToken")
  const email = localStorage.getItem("email")
  const name = localStorage.getItem("name")
  
  const [selectedAccordionId, setSelectedAccordionId] = useState(null);

  // const handleAddTarget = (id) => {
  //   setSelectedAccordionId(id === selectedAccordionId ? null : id);
  // };
  const handleAddTarget = (id) => {
    setSelectedAccordionId(id === selectedAccordionId ? null : id);
    setTargetParamKey(""); // Clear the targetParamKey input field
    setNameT(""); // Clear the nameT input field
    setValueT(""); // Clear the valueT input field
  };

  // let linksFromRedux = useSelector(p=>p.link.arrLink)

  const fetchLinks = () => {
    if (token != null && token != undefined && email) {
      axios.get(`http://tinyb.onrender.com/users/getlinks/${email}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
          console.log('res', res)
          setLinks(res.data)
        })
        .catch(error => console.log('error useEffect of myurl', error));
    }
  };
  const tinyUrl = "http://tinyb.onrender.com/";
  useEffect(() => {
    console.log('enter useEffect');
    console.log('token',token);
    console.log('email',email);

    // Fetch links when the component is mounted
    fetchLinks();
  }, []);
  //אפשרות לעשות עם זה ולהשתמש במערך המקומי שב-redux ויש לירק את הפונק הפטצ
  // useEffect(() => {
  //   console.log('enter useEffect');
  //   console.log('token',token);
  //   console.log('email',email);
  //    if(token!=null && token!=undefined && email){
  //    axios.get(`http://localhost:3000/users/getlinks/${email}`,{headers:{Authorization: `Bearer ${token}`}})
  //    .then(res=>{
  //     console.log('res',res)
  //     setLinks(res.data)
  //    })
  //    .catch(console.log('error useEffect of myurl'))} 
  // },[])


  const deleteLink = (id) => {
    axios.delete(`http://tinyb.onrender.com/links/${id}`,{headers:{Authorization: `Bearer ${token}`}})
    .then(res=>{console.log("res",res);
    console.log("Successfully deleted");
    setLinks(res.data);
})
.catch(console.log('error delete'))
}

const submit = (id,newUrl) => {
  console.log('enter handleSubmit id',id);
  if(nameT&&valueT&&newUrl){
    console.log('enter handleSubmit if');
  axios
      .put(`http://tinyb.onrender.com/links/${id}`, { targetParamKey }, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        handleClick();
        console.log("res.data.targetParamKey", res.data.targetParamKey);//מפה חוזר לדוג SEM
        setTargetParamKey(res.data.targetParamKey);
        console.log('targetParamKey', res.data.targetParamKey);
        console.log('success put+id');
        // Continue with the next state updates after the response has been received
        // and state is updated with the new value of targetParamKey.
        axios
          .put(`http://tinyb.onrender.com/links`, { nameT, valueT, newUrl, targetParamKey: res.data.targetParamKey }, { headers: { Authorization: `Bearer ${token}` } })
          .then(res => {
            console.log('success put res',res);
            console.log('res.data',res.data);//here the problem not return something??
            // const newParameter = res.data.substring(res.data.indexOf("3000/") + "3000/".length);
            const newParameter = res.data;
            console.log('newParameter', newParameter);
            axios.get(`http://tinyb.onrender.com/mail/${email}/${newParameter}`, { headers: { Authorization: `Bearer ${token}` } })
              .then(res => {
                console.log('successfully');
              })
              .catch(error => console.log('error email target'));
          })
          .catch(error => {
            // Handle error for the second axios call.
            console.log('error in second axios call', error);
          });
      })
      .catch(error => {
        // Handle error for the first axios call.
        console.log('error in first axios call', error);
      });
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (open) {
      fetchLinks();
    }
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')

    ) {
      
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 650 }}
      role="presentation"     
    >
      <List>
        {/* <MyUrl></MyUrl>  onClick={()=>setFlag(!flag)}*/}
        {name&&<Stack direction="row" spacing={2} className='close'>
        <Avatar sx={{ bgcolor: deepPurple[600] }}>{name[0]}</Avatar>
        {/* <Avatar sx={{ bgcolor: green[600] }}>{name[0]}</Avatar> */}
        </Stack>}
        <center>
        <h1 style={{margin:"auto",color:"#660066"}}>Your recent TinyURLs</h1><br/>
        </center>
        <hr />
        <br/><br/><br/>
        <ul>
          {links && links.map((item)=><li>
          <div>
          <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography className="linkText" style={{ marginRight:'8%'}}><span style={{display: 'inline-block', width:'30vw'}}>{item.link}</span>
          </Typography>
            <IconButton  onClick={()=>{deleteLink(item.id)}}>
            <DeleteOutlineIcon />
            </IconButton>     
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
          {/* <p>newUrl: <a href="tinyUrl+item.newUrl">{tinyUrl+item.newUrl}</a></p>  הדרך הזאת לא טובה כי אמור להכיל את הכתוברת האמיתית של האתר ולא בתור מחרוזת*/}
          {/* <p>newUrl: {tinyUrl+item.newUrl}</p> */}          
          <p>newUrl: <a href={tinyUrl + item.newUrl}>{tinyUrl + item.newUrl}</a> </p>  
         <input
         type="button"
         value="addTarget"
         onClick={() => handleAddTarget(item.id)}
         /><br/>
        {selectedAccordionId === item.id && ( // Only show the inputs for the selected accordion
        <>
          <input
          type="text"
          id="fname"
          name="firstname1"
          placeholder="targetParamKey"
          onChange={(event) => setTargetParamKey(event.target.value)}
          value={targetParamKey}
        />
        <input
          type="text"
          id="fname"
          name="firstname1"
          placeholder="name"
          onChange={(event) => setNameT(event.target.value)}
          value={nameT}
        />
        <input
          type="text"
          id="fname"
          name="firstname1"
          placeholder="value"
          onChange={(event) => setValueT(event.target.value)}
          value={valueT}
        />
        <br />
        <input
          type="button"
          value="Make Target!"
          onClick={() => submit(item.id, item.newUrl)}
        />
          <Snackbar
           open={open}
           autoHideDuration={6000}
           onClose={handleClose}
           message="Send target url to your email"
           action={action}
           />
        {/* <Button variant="contained" onClick={() => submit(item.id, item.newUrl)}></Button> */}
        <br />
      </>
       )}
          {/* <p>ipAdress: {item.clicks}</p> */}
          {/* {item.clicks && item.clicks.map((i) => <p>ipAdress: {i.clicks}</p>)}  */}
          {/* {links.clicks && links.clicks.map((item)=><p>{item.insertedAt}</p>)}  */}
          </Typography>
          </AccordionDetails>
          </Accordion>
          </div>
          </li>
            )}
        </ul>       
        <br/><br/>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="button_myUrl" onClick={toggleDrawer(anchor, true)} style={{backgroundColor:"#b3b3b3",height:"9vh"}}>My Url</Button>
          {/* <BottomNavigationAction className="button_myUrl" onClick={toggleDrawer(anchor, true)} style={{backgroundColor:"#b3b3b3",height:"8.4vh"}} icon={<RestoreIcon />}>My Url</BottomNavigationAction> */}
        
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

