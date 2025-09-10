import { useState } from "react";
import UserList from "../components/UserList";

const List = (props) => {
  const DATE = props.date;
  const [classes, setClasses] = useState([{ id: 0, title: "Other", color: "#424C55" }]);
  const [currId, setCurrId] = useState(0);
  const colorList = ["#BC4B51", "#F58A07", "#F7B32B", "coral", "#fd87aa"];

  const addClass = () => {
    setCurrId(currId + 1);


    let newClasse = prompt("name of class: ");
    const newClass = {
      id: currId,
      title: newClasse,
      color: colorList[currId % 5],
    };
    setClasses([newClass, ...classes]);
  }
  

  return (
    <div id="today-page-bg">
      <h1 className="pg-title">List -  {DATE} </h1>
      <br />
      <div id="today-page">
        {classes.map((item) => (
            <UserList id={item.id} title={item.title} color={item.color} />
          ))}
        {/* <UserList title="Math 128A" />
        <UserList title="Data 100" />
        <UserList title="Data 140" />
        <UserList title="CS 188" /> */}
      </div>
      <button id="add-class" onClick={addClass}>add class</button>
    </div>
  );
};

export default List;