import React, { useEffect, useState } from "react";
import { Link , useLocation} from "react-router-dom";
import { SidebarData } from "./sidebardata";
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 15px;
    padding: 2rem;
    text-decoration: none;
    color: #ffffff;
    border: 0.1px solid #ddd;
    &:hover {
        background-color: #1f1f1b;
        border-left: 4px solid #9c27b0;
        color:#fff;
        text-decoration: none;
    }
    &:visited {
        color:#fff;
        text-decoration: none;
    }
`;
const SidebarLabel = styled.span`
    margin-left: 1rem;
`;
const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 15px;
    padding-left: 5rem;
    text-decoration: none;
    color: #ffffff;
    &:hover {
        background-color: #9c27b0;
        color:#fff;
    }
`;
const DropdownLinkChild = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 15px;
    padding-left: 7rem;
    text-decoration: none;
    color: #ffffff;
    &:hover {
        background-color: #9c27b0;
        color:#fff;
    }
`;

const Submenu = ({ item }: any,path:string) => {

  const [pathvalue , setPathvalue]= useState("");
const location= useLocation();
  const [subNav, setsubNav] = useState(false);
  const [subMenu, setsubMenu] = useState(false);
  const showsubNav = () => setsubNav(!subNav);
  const showsubNavMenu = () => setsubMenu(!subMenu);
 
  useEffect( () => {
    setPathvalue(window.location.pathname);
  },[location]);
  return (
    <>
      <SidebarLink
        to={item.path}
        style={pathvalue == item.path ? {backgroundColor:"grey"}:{}}
        onClick={()=>{setsubNav(!subNav)}}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subNav &&
        item.subNav?.map((item: any , index:number) => {
          return (
            <>
              <DropdownLink
                to={item.path} style={pathvalue == item.path ? {backgroundColor:"grey"}:{}} key = {index}
                onClick={item.subNavMenus && showsubNavMenu}
              >
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
                <p style={{ marginLeft: "60px" }}>
                  {" "}
                  {subNav
                    ? item.iconOpened
                    : item.subNavMenu
                    ? item.iconClosed
                    : item.iconClosed}
                </p>
              </DropdownLink>
              {subMenu &&
                item.subNavMenus?.map((item: any) => {
                  return (
                    <>
                    <DropdownLinkChild to={item.path} style={pathvalue == item.path ? {backgroundColor:"grey"}:{}}>
                     
                      {item.icon}
                      <SidebarLabel>{item.title}</SidebarLabel>
                      {item.iconClosed}
                    </DropdownLinkChild>
                    </>
                  );
                })}
            </>
          );
        })}
    </>
  );
};




export default Submenu;