import { useState } from "react";
import ListItem from "./ListItem";

const UserList = (props) => {
  const thisList = props.title + "List";
  const [items, setItems] = useState([{ id: 0, label: "cat" }]);
  let currId = 0;


  const addItem = () => {
    currId += 1;
    const newItem = {
      id: currId,
      label: "input",
    };
    setItems([...items, newItem]);
  };

  const deleteItem = (idToDelete) => {
    setItems(items.filter((item) => item.id !== idToDelete));
  };


  return (
    <div className="list-container">
      <h2>{props.title} <button id={"add" + props.title} onClick={addItem} >+</button></h2>
      <div className="list-container" id={thisList}>
        {items.map((item) => (
          <ListItem id={item.id} label={item.label} deleteItem={deleteItem} />
        ))}
      </div>
    </div>
  );
};

export default UserList;