import  React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SwipeableTemporaryDrawer from './MyUrl'
import SingUpOpen from './SignUpOpen';
import SingInOpen from './SignInOpen'
import PlansOpen from './PlansOpen';
import MyUrl from './MyUrl';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [flag1, setFlag1] = React.useState(false);
  const [flagSignIn, setFlagSignIn] = React.useState(false);
  const [flagLog, setFlagLog] = React.useState(false);
  const [flagPlans, setFlagPlans] = React.useState(false);

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

        {flagLog && (
          <BottomNavigationAction
            className="button_myUrl"
            style={{ backgroundColor: ' #b3b3b3', height: '9vh' }}
            label="Logout"
            onClick={handleLogout}
          />
        )}
        <BottomNavigationAction className="button_myUrl" style={{backgroundColor:" #b3b3b3",height:"9vh"}} label="Sign In"   onClick={()=>setFlagSignIn(!flagSignIn)}/>
        {/* <BottomNavigationAction style={{backgroundColor:" #b3b3b3"}} label="sgin Up" icon={<FavoriteIcon />} /> */}
         
        <BottomNavigationAction className="button_myUrl" style={{backgroundColor:" #b3b3b3",height:"9vh"}} label="Sgin Up"  onClick={()=>setFlag1(!flag1)} />
        {/* icon={<LocationOnIcon />} */}
        <BottomNavigationAction className="button_myUrl" style={{backgroundColor:" #b3b3b3",height:"9vh"}} label="Plans" onClick={()=>setFlagPlans(!flagPlans)}/>
        {flagPlans&& <PlansOpen flag={flagPlans} setFlag={setFlagPlans}/>} 
      {flag1&&  <SingUpOpen flag={flag1} setFlag={setFlag1}/>}
      {flagSignIn&&  <SingInOpen flag={flagSignIn} setFlag={setFlagSignIn}/>}
       <MyUrl></MyUrl>
      </BottomNavigation>
    </Box>
  );
}
