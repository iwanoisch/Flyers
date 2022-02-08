import React from "react";
import {createSelector} from "reselect";
import {connect} from "react-redux";

import NavBarComponent from "../Components/NavBarComponent";
import {favouriteToggle} from "../Core/Actions/FlyersActions";


class Navbar extends React.PureComponent {

  componentDidMount() {
    //this.props.getFlayers();
  }


  render() {
    return <NavBarComponent {...this.props} />
  }
}

const getFlayersReducer = (state) => state.flyersReducer;

const mapStateToProps = createSelector(
  [getFlayersReducer],
  (flayerReducer) => {
    const {favouriteList = {}} = flayerReducer

    return {
      favouriteList: favouriteList
    };
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    favouriteToggle: (favToggle) => {
      dispatch(favouriteToggle(favToggle))
    }
  };
};


const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default NavBarContainer
