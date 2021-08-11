import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from './Sidebar'

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover{
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 40px;
  padding-left: 3rem;
  align-items: center;
  display: flex;
  text-decoration: none;
  font-size: 16px;
  color: #e1e9fc;

  &:hover{
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`


const Submenu = ({item}) => {
  const[subNav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subNav);

  return(
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subNav 
          ? item.iconOpen 
          : item.subNav 
          ? item.iconClosed 
          : null}
        </div>
      </SidebarLink>
      {subNav && item.subNav.map((item, index) => {
        return (
          <DropdownLink to={item.path} key={index}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })}
    </>
  )
}

export default Submenu;