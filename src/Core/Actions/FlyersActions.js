import {
  ADD_FAVORITE, CLEAR_BUTTON, DO_FILTER, DO_SEARCH, FAVOURITE_TOGGLE,
  GET_CATEGORIES,
  GET_FLAYERS,
  GET_RETAILERS, STORED_CATEGORIES,
  STORED_FLAYERS,
  STORED_RETAILERS
} from "../Constants/FlyersConstants";


export const getFlayers = () => {
  return {
    type: GET_FLAYERS
  }
};

export const storedFlayers = (flyers) => {
  return {
    type: STORED_FLAYERS,
    flyers
  }
};

export const addFavourite = (flyerId) => {
  return {
    type: ADD_FAVORITE,
    flyerId,
  }
};

export const getRetailers = () => {
  return {
    type: GET_RETAILERS
  }
};

export const storedRetailers = (retailers) => {
  return {
    type: STORED_RETAILERS,
    retailers
  }
};

export const getCategories = () => {
  return {
    type: GET_CATEGORIES
  }
};

export const storedCategories = (retailers) => {
  return {
    type: STORED_CATEGORIES,
    retailers
  }
};

export const doSearch = (searchItem) => {
  return {
    type: DO_SEARCH,
    searchItem
  }
};

export const doFilter = (filterBy) => {
  return {
    type: DO_FILTER,
    filterBy
  }
};


export const clearBtnToggle = () => {
  return {
    type: CLEAR_BUTTON,
  }
};

export const favouriteToggle = (favToggle) => {
  return {
    type: FAVOURITE_TOGGLE,
    favToggle
  }
};

