import './App.css';
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./compo/Navbar";

import CovidData from './CovidData';
import Statewise from './Statewise';
import Homepage from './Homepage';
import Registration from './Registration'
import Login from './Login';
import './bootstrap.min.css';

function App() {
  const [user, setUser] = useState(localStorage.getItem('user'));

  useEffect(() => {
    addUser();
  }, [user]);

  function addUser() {
    setUser(localStorage.getItem('user'));
    console.log(user);
  }

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="coviddata" element={<CovidData />} />
        <Route path="statewise" element={<Statewise />} />
        <Route path="registration" element={<Registration addUser={addUser} />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;