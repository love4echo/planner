import React, { useEffect, useState } from "react";

const ListItem = (props) => {
  const [completed, setCompleted] = useState(false);
  const [checkbox, setCheckbox] = useState("◻");
  // const [checkbox, setCheckbox] = useState("");
  
  
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete? (Action cannot be undone)")) {
      props.deleteItem(props.id); 
    }
  }

  const editItem = () => {
    alert('edit');
  }

  const check = () => {
    if (completed == false) {
      setCheckbox("☑");
      setCompleted(true);
    } else if (completed == true) {
      setCheckbox("◻");
      setCompleted(false);
    } 
  }
  

  // useEffect(() => {
  //   //side effect
  // }, [completed]);


  return (
    <div id={props.id} className="list-item" style={{ 
          backgroundColor: props.color,
          color: '#F3F3F4',
          border: '#424C55' }}>
      <button onClick={check}>{checkbox}</button>
      <p>{props.label}</p>
      {/* <button>✎</button> */}
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
};

export default ListItem;