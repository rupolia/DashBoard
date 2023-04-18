import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Styles from './Dashboard.module.css';

export default function Dashboard() {
  const navigate = useNavigate();
  navigate("/Logout");
  return(
    <div className={Styles.bg}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://c4.wallpaperflare.com/wallpaper/269/523/701/marvel-comics-movies-marvel-heroes-iron-man-wallpaper-preview.jpg">Rupolia
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blogs</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">News</a></li>
            <li><a className="dropdown-item" href="#">Videos</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Images</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <button  className={Styles.button} type="button"><Link to="/logout"><h6 className={Styles.button}>Logout</h6></Link></button>
      </form>
    </div>
  </div>
</nav>
<img
      src= "https://i.pinimg.com/originals/79/31/47/793147631c598800697615fd95852b01.jpg"
      alt=""
      className={Styles.img}
    ></img>
<div id="page-content">
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-md-7">
          
          <p className="lead text-white-50">SEO is an investment just like a tree that needs effort, patience and time to grow before you can see the result.”</p>
        </div>
      </div>
    </div>
  </div>
  <footer id="" className="flex-shrink-0 py-4 bg-dark text-white-50">
    <div className="container text-center">
      <small>thank you to visit us</small>
    </div>
  </footer>
    
</div>

    
    
  );
}
