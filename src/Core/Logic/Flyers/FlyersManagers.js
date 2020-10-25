import {ADD_FAVORITE, GET_FLAYERS, STORED_FLAYERS} from "../../Constants/FlyersConstants";
import {FlayersServices} from "../../Network/FlyersServices/FlyersAPI";
import {createLogic} from "redux-logic";
import {RESPONSE_CODE_SUCCESS} from "../../Constants/GenericConstants";
import {storedFlayers} from "../../Actions/FlyersActions";
import {checkIsFlyerFavourite, dataIsExpired, getFavouriteList} from "../../../Utils/DataUtil";

const GetFlayersManager = createLogic({
  type: [GET_FLAYERS],
  async process({action, getState}, dispatch, done) {

    try {
      const {data} = await FlayersServices.getFlayers();

      if (data.code === RESPONSE_CODE_SUCCESS) {
        const {result = {}} = data;
        const {flyers = {}} = result;

        dispatch(storedFlayers(flyers));

      } else {
        console.log(data);
      }

    } catch (error) {
      //dispatch(push('/no-events'));
      console.log(error);
    }
    done();
  }
});

const StoredFlyersManager = createLogic({
  type: [STORED_FLAYERS],
  transform({getState, action}, next) {
    const {flyers = {}} = action
const addFlyersIsExpired = dataIsExpired(flyers)
    next({
      ...action,
      flyers: addFlyersIsExpired,
    })
  }
});

const addFavouriteManager = createLogic({
  type: [ADD_FAVORITE],
  transform({getState, action}, next) {
    const {flyers = {}} = getState().flyersReducer
    const {flyerId = 0} = action
    const newFlyerFavourite = checkIsFlyerFavourite(flyers, flyerId)
    const newFavouriteList = getFavouriteList(newFlyerFavourite);

    next({
      ...action,
      flyers: newFlyerFavourite,
      favouriteList: newFavouriteList,

  })
  }
})

export const FlyersManagers = [
  GetFlayersManager,
  StoredFlyersManager,
  addFavouriteManager
]