import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
  navigate("/");
  return (
    <div>
        <li>
    <a href="./componet/Home/Home.js">
      <i className="fa fa-sign-out pull-right"></i> 
      Log Out
    </a>
</li>
    </div>
  )
}

export default Logout