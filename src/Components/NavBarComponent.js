import React from 'react';
import NavBar from "./NavBar/NavBar";
import '../Styles/App.scss';
import FlyersContainer from "../Containers/FlyersContainer";

const rightItems = [
  {as: "a", content: "Login", key: "login"},
  {as: "a", content: "Register", key: "register"}
];
const NavBarComponent = ({favouriteList = {}, favouriteToggle}) => {

  return <>
    <NavBar favouriteList={favouriteList} rightItems={rightItems} favouriteToggle={favouriteToggle}>
      <FlyersContainer/>
    </NavBar>
  </>
};

export default NavBarComponent;
