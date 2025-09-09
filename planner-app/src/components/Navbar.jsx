import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <ul id="navbar">
      <Link to="/home" id="today-btn"><li>Task List</li></Link>
      {/* <Link to="/weekly" id="today-btn"><li>Weekly</li></Link> */}
      {/* <Link to="/monthly" id="today-btn"><li>Monthly</li></Link> */}
      <Link to="/list" id="today-btn"><li>By Class</li></Link>
      <Link to="/help" id="today-btn"><li>Help</li></Link>
    </ul>
  );
};

export default Navbar;