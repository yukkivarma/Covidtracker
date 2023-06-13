import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavLogo,
} from './NavbarElements';

function NavButton(params) {
  const navigate = useNavigate();
  return (
    <div
      className="nav-button"
      onClick={() => navigate(params.path)}>
      {params.text}
    </div>
  );
}

function Navbar(props) {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <div className="logo"></div>
        </NavLogo>
        <Bars />
        <NavMenu>
          <NavButton text='Home' path='/' />
          <NavButton text='Country' path='/coviddata' />
          <NavButton text='State' path='/statewise' />
          {
            props.user !== null ?
              <NavButton text='Login' path="/login" />
              :
              <NavButton text='Registration' path="/registration" />
          }

        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;