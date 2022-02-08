import {
  ADD_FAVORITE, CLEAR_BUTTON, DO_FILTER, DO_SEARCH, FAVOURITE_TOGGLE, GET_CATEGORIES,
  GET_FLAYERS,
  GET_RETAILERS, STORED_CATEGORIES,
  STORED_FLAYERS,
  STORED_RETAILERS
} from "../../Constants/FlyersConstants";
import {createLogic} from "redux-logic";
import {
  addFavourite,
  getCategories,
  getRetailers,
  storedCategories,
  storedFlayers,
  storedRetailers
} from "../../Actions/FlyersActions";
import {
  addCategoriesToFlyer, addKeyTextValue,
  addRetailersToFlyer,
  checkIsFlyerFavourite,
  dataIsExpired, filterAction, filterItemFlyer, findItemFlyers,
  getFavouriteList
} from "../../../Utils/DataUtil";
import GetFlyersStub from "../../../DataMock/GetFlyersStub";
import GetRetailersStub from "../../../DataMock/GetRetailersStub";
import GetCategoriesStub from "../../../DataMock/GetCategoriesStub";

const GetFlayersManager = createLogic({
  type: [GET_FLAYERS],
  async process({action, getState}, dispatch, done) {

    try {
      const {data} = GetFlyersStub

      if (data) {

        dispatch(storedFlayers(data));
        dispatch(getRetailers())
        dispatch(getCategories())
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
  transform({getState, action}, dispatch, next) {
    const {flyers = {}} = action
    const addFlyersIsExpired = dataIsExpired(flyers)


    next({
      ...action,
      flyers: addFlyersIsExpired,
    })
  }
});

const AddFavouriteManager = createLogic({
  type: [ADD_FAVORITE],
  transform({getState, action}, next) {
    const {flyers = {}} = getState().flyersReducer
    const {flyerId = 0} = action
    const newFlyerFavourite = checkIsFlyerFavourite(flyers, flyerId)
    const newFavouriteList = getFavouriteList(newFlyerFavourite);

    //added to localStorage
    localStorage.setItem('watchlist', JSON.stringify(newFavouriteList))

    next({
      ...action,
      flyers: newFlyerFavourite,
      favouriteList: newFavouriteList
    })
  }
})

const GetRetailersManager = createLogic({
  type: [GET_RETAILERS],
  async process({action, getState}, dispatch, done) {

    try {
      const {data} = GetRetailersStub

      const {flyers = {}} = getState().flyersReducer

      if (data && flyers) {
        const newDataRetailers = addKeyTextValue(data);
        let newDataFlayer = addRetailersToFlyer(newDataRetailers, flyers)

        dispatch(storedRetailers(newDataRetailers))
        dispatch(storedFlayers(newDataFlayer));

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

const StoredRetailersManager = createLogic({
  type: [STORED_RETAILERS],
  transform({getState, action}, next) {
    const {retailers = {}} = action

    next({
      ...action,
      retailers: retailers,
    })
  }
});

const GetCategoriesManager = createLogic({
  type: [GET_CATEGORIES],
  async process({action, getState}, dispatch, done) {

    try {
      const {data} = GetCategoriesStub

      const {flyers = {}} = getState().flyersReducer

      if (data && flyers) {

        let newDataFlayer = addCategoriesToFlyer(data, flyers)

        dispatch(storedFlayers(newDataFlayer));
        dispatch(storedCategories(data))

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

const StoredCategoriesManager = createLogic({
  type: [STORED_CATEGORIES],
  transform({getState, action}, next) {
    const {categories = {}} = action

    next({
      ...action,
      categories: categories,
    })
  }
});

const DoSearchManager = createLogic({
  type: [DO_SEARCH],
  transform({getState, action}, next) {
    const {searchItem = ""} = action

    const {flyers = {}, flyerList = {}, isInSortMode = false, retailerIdSort = 0} = getState().flyersReducer

    const listSearch = isInSortMode ? flyerList : flyers;
    let newDropdownValue
    let newRetailerIdSort

    if (searchItem === "") {
      newDropdownValue = undefined;
      newRetailerIdSort = 0
    } else {
      newRetailerIdSort = retailerIdSort;
      newDropdownValue = retailerIdSort;
    }


    const flyersSearched = searchItem === ""
        ? flyers
        : findItemFlyers(listSearch, searchItem)

    next({
      ...action,
      filteredFlyers: flyersSearched,
      dropdownValue: newDropdownValue,
      retailerIdSort: newRetailerIdSort,
    })
  }
});

const DoFilterManager = createLogic({
  type: [DO_FILTER],
  transform({getState, action}, next) {
    const {retailerIdSort = '0', flyers = {}, flyerList = {}} = getState().flyersReducer
    const {filterBy = ""} = action


    const idFilter = filterBy && Number(filterBy.target.id);
    const isSortEnd = filterAction(filterBy.target.classList)

    const isSort = isSortEnd ? false : true;

    const sortedlist = filterItemFlyer(flyerList, flyers, idFilter, retailerIdSort)

    next({
      ...action,
      sortedlist: sortedlist,
      isInSortMode: isSort,
      retailerIdSort: filterBy.target.id,
      inputValue: ''
    })
  }
});

const ClearButtonManager = createLogic({
  type: [CLEAR_BUTTON],
  transform({getState, action}, next) {
    const {flyers = {}} = getState().flyersReducer

    next({
      ...action,
      dropdownValue: undefined,
      retailerIdSort: 0,
      flyers: flyers,
      inputValue: ''
    })
  }
});

const FavouriteToggleManager = createLogic({
  type: [FAVOURITE_TOGGLE],
  process({action, getState}, dispatch, done) {
    const {favToggle = ''} = action

    dispatch(addFavourite(favToggle));

    done();

  }
});


export const FlyersManagers = [
  GetFlayersManager,
  StoredFlyersManager,
  AddFavouriteManager,
  GetRetailersManager,
  StoredRetailersManager,
  GetCategoriesManager,
  StoredCategoriesManager,
  DoSearchManager,
  DoFilterManager,
  ClearButtonManager,
  FavouriteToggleManager,
]
