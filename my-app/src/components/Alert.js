import React from "react";

function Alert(props) {
  const lowercase = (word) => {
    const lower = word.toLowerCase();
    return lower;
  };
  return (
    <div style={{height:'50px'}}>
       {props.alert &&<div class={`alert alert-${lowercase(props.alert.type)} alert-dismissible fade show`}role="alert">
        <strong>{props.alert.type}</strong>:{props.alert.msg}
      </div>
}
      </div>
    )
}

export default Alert;
