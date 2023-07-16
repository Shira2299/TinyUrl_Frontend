import * as React from 'react';
import SingUpOpen from './SignUpOpen';
import "./TinyUrl.css";
export default function Text(){
    const [flag, setFlag] = React.useState(false);
    return(
    <>
    <div className='text'>
          <b>Welcome to</b>
    <h1>TinyURL</h1>
    <h3>Create a free account to enjoy:</h3> 
    <h5> Easy Link Shortening</h5>
    <h5>Full Link History</h5>
    <h5>Customized TinyURLs</h5>
    <button className="make" onClick={()=>setFlag(!flag)} >Creat Free Account</button>
    {flag&&  <SingUpOpen flag={flag} setFlag={setFlag}></SingUpOpen>}
    </div>  
    </>   
    )
}