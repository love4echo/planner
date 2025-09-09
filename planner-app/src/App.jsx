import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Today from './pages/Today';
import { Route, Routes } from "react-router-dom";
import Help from './pages/Help';
import List from './pages/List';


function App() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const DATE = currentDateTime.toDateString();

  return (
    <div>
      <p>Todo: color code & add classes, the labels, check, sort, due date, edit, help</p>
      <Routes>
        <Route path="/" element={<Today date={DATE} />} />
        <Route path="/home" element={<Today date={DATE} />} />
        <Route path="/help" element={<Help />} />
        <Route path="/list" element={<List date={DATE} />} />
      </Routes>
      <Navbar />
    </div>
  );
};

export default App;
