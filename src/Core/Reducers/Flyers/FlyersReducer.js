import createReducer from "../../../Utils/CreateReducerUtils";

import {
  ADD_FAVORITE, CLEAR_BUTTON, DO_FILTER, DO_SEARCH, GET_CATEGORIES,
  GET_FLAYERS,
  GET_RETAILERS, STORED_CATEGORIES,
  STORED_FLAYERS,
  STORED_RETAILERS
} from "../../Constants/FlyersConstants";

const getFlayers = (draft, action) => {
  draft.fetching = true
};

const storedFlayers = (draft, action) => {
  draft.fetching = false;
  draft.fetching = false;
  draft.flyers = action.flyers;
  draft.flyerList = action.flyers;
};

const addFavourite = (draft, action) => {
  draft.fetching = false;
  draft.flyerList = action.flyers;
  draft.flyers = action.flyers;
  draft.favouriteList = action.favouriteList;
};

const getRetailers = (draft, action) => {
  draft.fetching = true
};

const storedRetailers = (draft, action) => {
  draft.fetching = false;
  draft.retailers = action.retailers;
};

const StoredCategories = (draft, action) => {
  draft.fetching = false;
  draft.categories = action.categories;
};

const getCategories = (draft, action) => {
  draft.fetching = true
};

const doSearch = (draft, action) => {
  draft.retailerIdSort = action.retailerIdSort
  draft.flyerList = action.filteredFlyers;
  draft.inputValue = action.searchItem;
  draft.dropdownValue = action.dropdownValue;

};

const doFilter = (draft, action) => {
  draft.flyerList = action.sortedlist;
  draft.isInSortMode = action.isInSortMode
  draft.retailerIdSort = action.retailerIdSort
  draft.dropdownValue = action.retailerIdSort
  draft.inputValue = action.inputValue;
};

const clearButton = (draft, action) => {
  draft.dropdownValue = action.dropdownValue;
  draft.retailerIdSort = action.retailerIdSort
  draft.flyerList = action.flyers;
  draft.inputValue = action.inputValue;
};

const initState = {
  fetching: false,
  isInSortMode: false,
  retailerIdSort: 0,
  dropdownValue: undefined,
  inputValue: "",
  flyers: {},
  flyerList: {},
  favouriteList: {},
  categories: {},
  retailers: {}
};

export default createReducer({
  [GET_FLAYERS]: getFlayers,
  [STORED_FLAYERS]: storedFlayers,
  [ADD_FAVORITE]:addFavourite,
  [GET_RETAILERS]:getRetailers,
  [STORED_RETAILERS]:storedRetailers,
  [GET_CATEGORIES]:getCategories,
  [STORED_CATEGORIES]:StoredCategories,
  [DO_SEARCH]:doSearch,
  [DO_FILTER]:doFilter,
  [CLEAR_BUTTON]:clearButton,

}, initState);
