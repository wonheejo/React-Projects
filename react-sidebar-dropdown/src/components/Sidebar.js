import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import Submenu from './Submenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sideBar }) => (sideBar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.nav`
  width: 100%;
`;

const Sidebar = () => {
  const[sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar)

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSideBar}/>
        </NavIcon>
      </Nav>
      <SidebarNav sideBar={sideBar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSideBar}/>
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <Submenu item={item} key={index}/>
          })}
        </SidebarWrap>
      </SidebarNav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar
