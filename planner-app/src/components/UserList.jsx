
const UserList = (props) => {
  return (
    <div>
      <h2>{props.title} <button id={"add" + props.title} >+</button></h2>
      <div>list items</div>
    </div>
  );
};

export default UserList;