import {Container} from "semantic-ui-react";
import React from "react";

const NavBarChildren = ({children}) => {
  return <>
    <Container style={{marginTop: "5em"}}>{children}</Container>
  </>
}

export default NavBarChildren;
