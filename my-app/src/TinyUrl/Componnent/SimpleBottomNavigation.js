import  React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer'
//import SignUp from './SignUp';
import SingUpOpen from './SignUpOpen';
import SingInOpen from './SignInOpen'
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [flag1, setFlag1] = React.useState(false);
  const [flagSignIn, setFlagSignIn] = React.useState(false);
  const [flagLog, setFlagLog] = React.useState(false);

  const checkLocalStorage = () => {
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('accessToken');
    const hasEmailAndToken = email && token;
  
    setFlagLog(hasEmailAndToken);
  };
  
  useEffect(() => {
    checkLocalStorage();
  }, []);
  
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    setFlagLog(false);
  };
 
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation style={{margin:"20px"}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >

        {/* <BottomNavigationAction  style={{backgroundColor:" #b3b3b3"}} label="Log Out"  icon={<RestoreIcon />} />   */}
        {/* style={{backgroundColor:"#b3b3b3",height:"8.4vh"}}  icon={<RestoreIcon />}  */}
        {/* {flagLog&&<BottomNavigationAction className="button_myUrl" style={{backgroundColor:" #b3b3b3",height:"8vh"}} label="Logout"   onClick={()=>setFlagSignIn(!flagSignIn)}/>} */}
        {flagLog && (
          <BottomNavigationAction
            className="button_myUrl"
            style={{ backgroundColor: ' #b3b3b3', height: '9vh' }}
            label="Logout"
            onClick={handleLogout}//לרוקן את המערך המקומי
          />
        )}
        <BottomNavigationAction className="button_myUrl" style={{backgroundColor:" #b3b3b3",height:"9vh"}} label="Sign In"   onClick={()=>setFlagSignIn(!flagSignIn)}/>
        {/* <BottomNavigationAction style={{backgroundColor:" #b3b3b3"}} label="sgin Up" icon={<FavoriteIcon />} /> */}
         
        <BottomNavigationAction className="button_myUrl" style={{backgroundColor:" #b3b3b3",height:"9vh"}} label="Sgin Up"  onClick={()=>setFlag1(!flag1)} />
        {/* icon={<LocationOnIcon />} */}
      {flag1&&  <SingUpOpen flag={flag1} setFlag={setFlag1}/>}
      {flagSignIn&&  <SingInOpen flag={flagSignIn} setFlag={setFlagSignIn}/>}
       <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
      </BottomNavigation>
    </Box>
  );
}
