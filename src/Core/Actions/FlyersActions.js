import {ADD_FAVORITE, GET_FLAYERS, STORED_FLAYERS} from "../Constants/FlyersConstants";


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
    flyerId
  }
};