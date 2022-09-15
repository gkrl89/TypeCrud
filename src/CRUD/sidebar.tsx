import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import  {SidebarData}  from './sidebardata'
import Submenu from './submenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: black;
`;

const SidebarNav = styled.div`
    width: 250px;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
        transition: 350ms;
`;

const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 2rem;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const Sidebar = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const showSidebar = () => 
  {
    setSidebar(!sidebar);}
    
  return (
      <IconContext.Provider value={{ color: '#fff' }}>
          <Nav>
              <NavIcon to="#">
                  <AiIcons.AiOutlineMenu /> 
              </NavIcon>
              <a href='/'><h3 className='title'>Admin Panel</h3></a>
          </Nav>
          <SidebarNav>
              <SidebarWrap>
                  <NavIcon to="#" onClick={showSidebar}>
                      <AiIcons.AiFillHome />
                  </NavIcon>
                 
                  {SidebarData.map((item, index) => {
                      return <Submenu item={item} key={index} />;
                  })}
              </SidebarWrap>
          </SidebarNav>
      </IconContext.Provider>
  );
};


export default Sidebar;