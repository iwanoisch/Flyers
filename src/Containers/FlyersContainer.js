import React from "react";
import {createSelector} from "reselect";
import {connect} from "react-redux";
import {addFavourite, clearBtnToggle, doFilter, doSearch, getFlayers} from "../Core/Actions/FlyersActions";
import FlyersComponent from "../Components/FlyersComponent";


class Flyers extends React.PureComponent {

  componentDidMount() {
    this.props.getFlayers();
  }


  render() {
    return <FlyersComponent {...this.props} />
  }
}

const getFlayersReducer = (state) => state.flyersReducer;

const mapStateToProps = createSelector(
    [getFlayersReducer],
    (getFlayersReducer = {}) => {

      return {
        flyerList: getFlayersReducer.flyerList,
        retailers: Object.values(getFlayersReducer.retailers),
        dropdownValue: getFlayersReducer.dropdownValue,
        inputValue: getFlayersReducer.inputValue,
      };
    }
);

const mapDispatchToProps = (dispatch) => {
  return {
    getFlayers: () => {
      dispatch(getFlayers())
    },
    addFavorite: (flyerId) => {
      dispatch(addFavourite(flyerId))
    },
    doSearch: (searchItem) => {
      dispatch(doSearch(searchItem))
    },
    filteredBy: (filterBy) => {
      dispatch(doFilter(filterBy))
    },
    clearBtnToggle: () => {
      dispatch(clearBtnToggle())
    }
  };
};


const FlyersContainer = connect(mapStateToProps, mapDispatchToProps)(Flyers);
export default FlyersContainer
