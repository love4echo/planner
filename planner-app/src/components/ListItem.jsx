
const ListItem = (props) => {
  
  const handleDelete = () => {
    confirm("Are you sure you want to delete? (Action cannot be undone)");
    props.deleteItem(props.id); 
  }

  return (
    <div id={props.id} className="list-item">
      <button>◻☑</button>
      <p>{props.label}</p>
      <button>✎</button>
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
};

export default ListItem;