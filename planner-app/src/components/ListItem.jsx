import React, { useState } from "react";

const ListItem = (props) => {
  const [completed, setCompleted] = React.useState("false");
  const checkbox = "◻";
  
  const handleDelete = () => {
    confirm("Are you sure you want to delete? (Action cannot be undone)");
    props.deleteItem(props.id); 
  }

  const editItem = () => {
    alert;
  }

  const check = () => {
    alert(completed);
    checkbox = "☑";
  }
  // if (completed == "false") {
  //   checkbox = "◻";
  // } else if (completed == true) {
  //   checkbox = "☑";
  // } else {
  //   setCompleted(false);
  //   alert("error: " + completed);
  // }

  React.useEffect


  return (
    <div id={props.id} className="list-item">
      <button onClick={check}>{checkbox}</button>
      <p>{props.label}</p>
      <button>✎</button>
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
};

export default ListItem;