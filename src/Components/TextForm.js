import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick =() =>{
    // console.log("UPPERCASE was clicked"+ text)
    let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to UpperCase","success");
}

const handleLoClick =() =>{
    // console.log("UPPERCASE was clicked"+ text)
    let newText = text.toLowerCase();
     setText(newText);
     props.showAlert("Converted to LowerCase","success");
}
const handleClearClick =() =>{
    // console.log("UPPERCASE was clicked"+ text)
    let newText = " ";
     setText(newText);
     props.showAlert("Text box is Empty","success");
}

const handleOnchange =(event) =>{
    // console.log("onChange")
    setText(event.target.value)
}

const handleCopyClick =(event) =>{
    let text = document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied","success");
}
const [text, setText] = useState("Enter text here");
return (
    <>
         <div className='container my-3'  > {/*bg={`bg-${props.RedMode} bg-${props.RedMode}`}  //this is for body background to dark*/} 
          <h2>{props.heading}  </h2>
          {/* <div className="form-check form-switch  mx-3">
                <input className="form-check-input" onClick={props.toogleRedMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className={`form-check-label text-${props.RedMode==="light" ?"danger":"light" }`} htmlfor="flexSwitchCheckDefault">Enable red Mode</label> </div>
         button to convert dark mode or any other thing*/}
           <div className="mb-3">
            <textarea className="form-control "  value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-warning my-2 mx-3" onClick={handleLoClick}>Convert to lowerCase</button>
            <button className="btn btn-danger my-2 mx-3" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-danger my-2 mx-3" onClick={handleCopyClick}>Copy Text</button>


        </div>



        <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>You Have {text.split(" ").length } Words and {text.length} Characters  </p>  
        <p>It will take {0.08 * text.split(" ").length } minutes to read this </p>
        <h2>Preview</h2>
        <p>{text} </p>      
        </div>    
    
    </>


  )
}
