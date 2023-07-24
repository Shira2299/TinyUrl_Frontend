// import * as React from 'react';
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
import MyUrl from './MyUrl';
import LinkList from './LinkList';
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
import { deepGreen, deepPurple, green } from '@mui/material/colors';

export default function SwipeableTemporaryDrawer() {
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({
 
    right: false,
  });
  let [links, setLinks] = useState([])
  const token = localStorage.getItem("accessToken")
  const email = localStorage.getItem("email")
  const name = localStorage.getItem("name")
  // let linksFromRedux = useSelector(p=>p.link.arrLink)

  const fetchLinks = () => {
    if (token != null && token != undefined && email) {
      axios.get(`http://localhost:3000/users/getlinks/${email}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
          console.log('res', res)
          setLinks(res.data)
        })
        .catch(error => console.log('error useEffect of myurl', error));
    }
  };
  const tinyUrl = "http://localhost:3000/";
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
    axios.delete(`http://localhost:3000/links/${id}`,{headers:{Authorization: `Bearer ${token}`}})
    .then(res=>{console.log("res",res);
    console.log("Successfully deleted");
        //   setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
   setLinks(res.data);
})
.catch(console.log('error delete'))
}
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
          <Typography className="linkText">{item.link}
            <IconButton  onClick={()=>{deleteLink(item.id)}}>
            <DeleteOutlineIcon />
            </IconButton>     
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
          {/* <p>newUrl: <a href="tinyUrl+item.newUrl">{tinyUrl+item.newUrl}</a></p>  */}
          <p>newUrl: {tinyUrl+item.newUrl}</p>
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
          <Button className="button_myUrl" onClick={toggleDrawer(anchor, true)} style={{backgroundColor:"#b3b3b3",height:"9vh"}}  icon={<RestoreIcon />}>My Url</Button>
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

