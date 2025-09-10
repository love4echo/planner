import PopUpCard from "../components/PopUpCard";
import UserList from "../components/UserList";

const Today = (props) => {
  const DATE = props.date;

  return (
    <div id="today-page-bg">
      <h1 className="pg-title">Today -  {DATE}</h1>
      <br />
      <div id="today-page">
        <UserList title="Assignments" className="left-div"  />
        <UserList title="Events" className="left-div"  />
      </div>
    </div>
  );
};

export default Today;