import { useState } from "react";
import ListItem from "./ListItem";

const UserList = (props) => {
  const thisList = props.title + "List";
  const color = props.color;
  const [items, setItems] = useState([]);
  const [currId, setCurrId] = useState(0);


  const addItem = () => {
    const newLabel = prompt("New Assignment: ");
    const newDate = prompt("Due Date: ");
    const newItem = {
      id: currId,
      label: newLabel,
      class: props.title,
      due: newDate
    };
    setCurrId(currId + 1);
    setItems([...items, newItem]);
  };
  

  const deleteItem = (idToDelete) => {
    setItems(items.filter(item => item.id !== idToDelete));
  };

  return (
      <div className="list-container">
        <h2>{props.title} <button id={"add" + props.title} onClick={addItem} >+</button></h2>
        <div className="list-container" id={thisList}>
          {items.map((item) => (
            <ListItem id={item.id} label={item.label + " - " + item.due} color={props.color} deleteItem={deleteItem} />
          ))}
        </div>
      </div>
    );
};

export default UserList;