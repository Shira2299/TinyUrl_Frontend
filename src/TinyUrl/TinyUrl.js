import React, { useEffect } from "react"
import "./Componnent/TinyUrl.css"
import AddUrl from "./Componnent/AddUrl"
import Text from "./Componnent/Text"
import SimpleBottomNavigation from "./Componnent/SimpleBottomNavigation";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>


const TinyUrl = () =>{
const email = localStorage.getItem("email");
const [open, setOpen] = React.useState(true);

  return(
        <>
       {email&&( 
            <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
             You exist in the system! We are glad you chose to use our site...
            </Alert>
          </Collapse>   
           )}
        <div className="flex">
        <h1 className="h1">TinyUrl</h1>
           
        <SimpleBottomNavigation className="SimpleBottomNavigation"/>       
        </div>      
        <div className="flex">
        <div className="log-wrapper">
         <div className="log">
        <AddUrl />
        </div>
        </div>
        <Text/>
        </div>
           
        </>
    )
}


export default TinyUrl;