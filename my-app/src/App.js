//import logo from './logo.svg';
import './App.css';
import TinyUrl from './TinyUrl/TinyUrl';
//import BottomNavigation from './NavLinks.JS'
// import "./TnyUrl.css"
import {Link,Route,Routes} from 'react-router-dom';
function App() {
  return (

    <div className="App">
      {/* <nav>
        <ul className="nav">
         <Link to="MyUrl">MyUrl</Link>&nbsp;&nbsp;
         <Link to="Plance">Plance</Link>&nbsp;&nbsp;
         <Link to="SingIn">SingIn</Link>&nbsp;&nbsp;
         <Link to="SingUp">SingUp</Link>&nbsp;&nbsp;
         
         </ul>
      </nav> */}
      <TinyUrl></TinyUrl>
     
    </div>

  );
}

export default App;
