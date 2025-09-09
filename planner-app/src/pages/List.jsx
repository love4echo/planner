import UserList from "../components/UserList";

const List = (props) => {
  const DATE = props.date;
  

  return (
    <div id="today-page-bg">
      <h1 className="pg-title">List -  {DATE}</h1>
      <br />
      <div id="today-page">
        <UserList title="Math 128A" />
        <UserList title="Data 100" />
        <UserList title="Data 140" />
        <UserList title="CS 188" />
      </div>
    </div>
  );
};

export default List;