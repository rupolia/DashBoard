import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Dashboard from './component/Dashboard/Dashboard';
import Blogs from './component/Blog/Blogs'
import News from './component/News/News';
import Logout from './component/LogOut/Logout'
import { auth } from "./firebase";

import './App.css';

function App() {
  const [UserName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/news' element={<News/>}/>
          <Route path='/logout' element={<Logout/>}/>
          
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
