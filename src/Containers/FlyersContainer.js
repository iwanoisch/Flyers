import React from "react";
import {createSelector} from "reselect";
import {connect} from "react-redux";
import {addFavourite, getFlayers} from "../Core/Actions/FlyersActions";
import FlyersComponent from "../Components/FlyersComponent";


class Flyers extends React.PureComponent {

  componentDidMount() {
    this.props.getFlayers();
  }


  render() {
    return <FlyersComponent {...this.props} />
  }
}

const getFlayersReducer = (state) => state.flyersReducer.flyers;

const mapStateToProps = createSelector(
  [getFlayersReducer],
  (flyers) => {


    return {
      flyers: flyers
    };
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    getFlayers: () => dispatch(getFlayers()),
    addFavorite: (flyerId) => dispatch(addFavourite(flyerId))
  };
};


const FlyersContainer = connect(mapStateToProps, mapDispatchToProps)(Flyers);
export default FlyersContainer