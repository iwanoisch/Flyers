import createReducer from "../../../Utils/CreateReducerUtils";

import {ADD_FAVORITE, GET_FLAYERS, STORED_FLAYERS} from "../../Constants/FlyersConstants";

const getFlayers = (draft, action) => {
  draft.fetching = true
};

const storedFlayers = (draft, action) => {
  draft.fetching = false;
  draft.flyers = action.flyers;
};

const addFavourite = (draft, action) => {
  draft.fetching = false;
  draft.flyers = action.flyers;
  draft.favouriteList = action.favouriteList;
};


const initState = {
  fetching: false,
  flyers: {},
  favouriteList: {}
};

export default createReducer({
  [GET_FLAYERS]: getFlayers,
  [STORED_FLAYERS]: storedFlayers,
  [ADD_FAVORITE]:addFavourite,
}, initState);