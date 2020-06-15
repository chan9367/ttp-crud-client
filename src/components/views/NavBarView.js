import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
        <Link to="/" >
         Home
        </Link><Link to="/campuses" >
        Campuses
        </Link><Link to="/students" >
        Students   
        </Link>
        
    </nav>
  );
};

export default NavBarView;
