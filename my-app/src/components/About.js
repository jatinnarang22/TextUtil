// import React, { useState } from "react";


export default function About(props) {
//   const [mystyle1, setmystyle1] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });

  // const [btntext, setbtntext] = useState("Enable Light Mode");
  // const togglestyle1 = () => {
  //   if (mystyle1.color === "white") {
  //     setmystyle1({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtntext("Enable Dark Mode");
  //   } else {
  //     setmystyle1({
  //       color: "white",
  //       backgroundColor: "black",
  //       // border:'1px solid white'
  //     });
  //     setbtntext("Enable Light Mode ");
  //   }
  // };
  return (
    <div className="conatainer ">
      <h1 className="my-3 mx-3 " style={{color: props.mode === "dark" ? "black" : "white"}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong> Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              TextUtils is a free character counter tool that provides instant character count & 
              word count statistics for a given text . TextUtils reports the number of word and 
              character.Thus it is sutable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" >
              This word counter works in any web browsers such as Chrome, FireFox ,Internet Explorer,Sufari,Opera.
              It suits to count character in facebook, blog, books, excel document , pdf document , essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button
          type="button"
          onClick={togglestyle1}
          class="btn btn-primary my-3"
        >
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
