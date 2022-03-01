
import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';



// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { Router ,Route ,Switch} from 'react-router-dom';


function App() {
const  [mode , setMode] = useState("light"); //this one is used for dark or light mode for Navbar.
const  [alert , setAlert] = useState(null);



//const  [RedMode , setRedMode] = useState("light");
//"toogleRedMode={toogleRedMode} RedMode={RedMode} this on for body background in text form
// const toogleRedMode =() =>{
//   if (RedMode === "light") {
//     setRedMode  ("secondary");
//     // showAlert("Dark mode is Enable","success");
//     // document.body.style.backgroundColor ="light"
//   }
//   else {
//     setRedMode ("light");
//     // showAlert("Light mode is Enable","success" );

//     // document.body.style.backgroundColor ="dark"
    
//   }
// }

const showAlert = (message , type)=>{
  setAlert({
     msg : message ,
     type : type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500);
}



const toogleMode =() =>{
  if (mode === "light") {
    setMode  ("dark");
    showAlert("Dark mode is Enable","success");
    document.title = "Text Utils - Dark mode" ;
    // document.body.style.backgroundColor ="light"
  }
  else {
    setMode ("light");
    showAlert("Light mode is Enable","success" );
    document.title = "Text Utils - Light mode" ;

    // document.body.style.backgroundColor ="dark"
    
  }
}



  return (
    <>
{/* <Router> */}
 <Navbar title="text Utils" mode={mode}  aboutText="About Us" toogleMode={toogleMode}   />   
<Alert alert={alert} />
<div className="container">
{/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route>                 */}
          {/* <Route exact path="/"> */}
          <TextForm  showAlert ={showAlert}  heading="Enter your Text  to Analyse" />          
          {/* </Route> */}
 {/* </Switch> */}
</div>
{/* </Router> */}
    </>
  );
}

export default App;
