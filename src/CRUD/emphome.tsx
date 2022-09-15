import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useState } from "react";
import {SidebarData} from './sidebardata';
import "./navbar.css";
import Submenu from './submenu'

// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {

  const [sidebar, setSidebar] = useState(true);

  return (
    <>
       <div className="header">
          <h1>Home</h1>
        </div>{" "}
    <div className="home">
      <h2> Welcome to Employee Database</h2>
    </div>

    <div className="navbar">
<Link to = "#" className="menu-bars">
  <FaIcons.FaBars />
</Link>
    </div>

    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className="nav-menu-items">
      {SidebarData.map((item, index) => {
              return <Submenu item={item} key={index} />;
            })}


      </ul>

    </nav>


      
    </>
  );
};
export default Navbar;
