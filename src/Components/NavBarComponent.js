import React from 'react';
import NavBar from "./NavBar/NavBar";
import '../Styles/App.css';
import FlyersContainer from "../Containers/FlyersContainer";

const rightItems = [
  {as: "a", content: "Login", key: "login"},
  {as: "a", content: "Register", key: "register"}
];
const NavBarComponent = ({favouriteList = {}, addFavorite}) => {

  return <>
    <NavBar favouriteList={favouriteList} rightItems={rightItems}>
      <FlyersContainer/>
    </NavBar>
  </>
};

export default NavBarComponent;