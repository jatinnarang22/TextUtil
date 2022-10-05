import React, { useState } from "react";

export default function Textform(props) {
  // -----------------------Upper Case------------------//
  const handleupclick = () => {
    // console.log("Uppercase was clicked   "+Text);
    let newtext = Text.toUpperCase();
    setText(newtext);
    props.showAlert("Convert To UpperCase", "Success");
  };
  // -----------------------Lower Case------------------//
  const handleloclick = () => {
    // console.log("Uppercase was clicked   "+Text);
    let newtext = Text.toLowerCase();
    setText(newtext);
    props.showAlert("Convert To LowerCase", "Success");
  };
  // -----------------------Copy Text------------------//
  const copytext = () => {
    var copytext = document.getElementById("mybox");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
    props.showAlert("Text has been copied", "Success");
  };
  const [themes, setthemes] = useState();
  // -----------------------Color Themes------------------//
  const colorchange = () => {
    // console.log("Uppercase was clicked   "+Text);
    let person = prompt("Enter the color", "red");
    if (person != null) {
      // document.body.style.background=person;
      // document.getElementById("color1").style.color = person;
      props.showAlert("Your Themes Has Been Changed to", "Success");
      setthemes(person);
    }
     if(person== 'white'){
      props.showAlert("White Color Is Not Allowed So By Default Change It`s Color To Black","warning");
      setthemes('black');
    }
    if(person=='yellow'){
      setthemes('#ced65c');
    }
  };
  // -----------------------Dark Mode------------------//
  const toggle = () => {
    if (props.mode === "dark") {
      props.setmode("light");
      // props.showAlert("Light mode has been enable","Success");
      props.showAlert("Light Mode Has Been Enabled", "Success");
    } else {
      props.setmode("dark");
      // props.showAlert("Light mode has been enable","Success");
      props.showAlert("Dark Mode Has Been Enabled", "Success");
    }
  };
  // -----------------------Clear text area------------------//
  const clear = () => {
    // console.log("Uppercase was clicked   "+Text);
    // let newtext = Text.toLowerCase();
    setText("");
    props.showAlert("Your Text Has Been Cleared", "Success");
  };
  const handleonchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const [Text, setText] = useState("");
  //Text="new text"   wrong way to change the state
  // setText("new text"); // correct way to change the state;
  return (
    <>
      <div className="container"  style={{backgroundColor:props.navb}}>
        <div className="container" style={{ padding:30}}>
          {/* <div className="form-check form-switch " style={{ padding: "0" }}>
            <input
              className="form-check-input"
              onClick={toggle}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              Dark Mode
            </label>
          </div> */}
          <div>
          <h1 style={{color: props.mode === "dark" ? "black" : "white" }}>
            {props.heading}
          </h1>
          </div>  
        </div>
        <div className="mb-3">
          {/* <label for="mybox" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={Text}
            onChange={handleonchange}
            id="mybox"
            rows="10"
            style={{
              // color: props.mode === "dark" ? "white" : "black",
              // backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: themes,
            }}
          ></textarea>
        </div>
        <button disabled={Text.length===0}
          className="btn btn-primary mx-2 my2"
          style={{ backgroundColor: themes }}
          onClick={handleupclick}
        >
          Conver To Uppercase
        </button>
        <button disabled={Text.length===0}
          className="btn btn-primary mx-2 my-2"
          style={{ backgroundColor: themes }}
          onClick={handleloclick}
        >
          Conver To Lowercase
        </button>
        <button disabled={Text.length===0}
          className="btn btn-primary mx-2 my-2"
          style={{ backgroundColor: themes }}
          onClick={clear}
        >
          Clear
        </button>
        <button disabled={Text.length===0}
          className="btn btn-primary mx-2 my-2"
          style={{ backgroundColor: themes }}
          onClick={copytext}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          style={{ backgroundColor: themes }}
          onClick={colorchange}
        >
          Change Themes
        </button>
      
      <div
        className="container " 
        style={{ color: props.mode === "dark" ? "black" : "white " }}
      >
        <h2 style={{ color: themes }}>Your Text Summary</h2>
        <p>
          {Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} charactor
        </p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3 style={{ color: themes }}>Preview</h3>
        <p id="color1">
          {Text.length > 0 ? Text : "Enter the text to preview it here"}
        </p>
      </div>
      </div>
    </>
  );
}







// localStorage.setItem("theme", "red");
// useState(localStorage.getItem("theme"))