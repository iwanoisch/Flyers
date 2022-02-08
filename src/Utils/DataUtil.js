export const dataIsExpired = (flyers) => {
  const NewDataToday = "2019-04-19"; //WE ARE IN 2020 ALL EVENTS ARE EXPIRED

  return Object.values(flyers).map(flyer => {
    return {
      ...flyer,
      isExpired: Date.parse(NewDataToday) > Date.parse(flyer.end_date),
      isFavourite: false
    }
  })
};
export const addWatchList = (flyers, watchlist) => {
  const list = watchlist.map(list => checkIsFlyerFavouriteList(flyers,list.id))
  return list;
}

export const checkIsFlyerFavouriteList = (flyers, flyerId) => {

  return Object.values(flyers).map(flyer => {

    let newIsFavourite;
    if (flyer.id === flyerId || flyer.isFavourite) {
      newIsFavourite = true;
    }
    if (flyer.id === flyerId && flyer.isFavourite) {
      newIsFavourite = false
    }
    return {
      ...flyer,
      isFavourite: newIsFavourite
    }
  })
};

export const checkIsFlyerFavourite = (flyers, flyerId) => {

  return Object.values(flyers).map(flyer => {

    let newIsFavourite;
    if (flyer.id === flyerId || flyer.isFavourite) {
      newIsFavourite = true;
    }
    if (flyer.id === flyerId && flyer.isFavourite) {
      newIsFavourite = false
    }
    return {
      ...flyer,
      isFavourite: newIsFavourite
    }
  })
};

// eslint-disable-next-line
export const getFavouriteList = (flyersFavourites) => {
  let favouriteList = [];
// eslint-disable-next-line
  flyersFavourites.map(flyer => {
    if (flyer.isFavourite) {
      favouriteList.push(flyer);
    }
  });
  return favouriteList;
}

export const addKeyTextValue = (data = {}) => {

  return data.map((d) => {
    return {
      ...d,
      key: d.id,
      text: d.name,
      value: d.id,
    }
  });

}

export const addRetailersToFlyer = (retailers = {}, flyers = {}) => {

  return flyers.map((f) => {
    return {
      ...f,
      retailer: retailers.find(r => r.id === f.retailer_id)
    }
  });

};

export const addCategoriesToFlyer = (categories = {}, flyers = {}) => {

  return flyers.map((f) => {
    return {
      ...f,
      category: categories.find(c => c.id === f.category_id)
    }
  });

};

export const findItemFlyers = (flyers = [], searchItem = '') => {
  // eslint-disable-next-line
  return flyers.filter(flyer => {
        if (searchItem === '') {
          return flyer;
        } else if (flyer.title.toLowerCase().includes(searchItem.toLowerCase())) {
          return flyer;
        }
      }
  ).map(searchedFlyers => {
    return searchedFlyers
  })

};

export const filterItemFlyer = (flyerList, flyers, idFilter, retailerIdSort) => {

  let newFlyerList;

  // const newFlyerList = flyerList.length > 0
  //     ? flyerList
  //     : flyers
  if ( flyerList.length > 0 && retailerIdSort === idFilter) {
    newFlyerList = flyerList
  } else {
    newFlyerList = flyers
  }
  // eslint-disable-next-line
  return newFlyerList.filter(flyer => {
        if (!idFilter) {
          return flyer;

        } else if (flyer.retailer_id === idFilter) {
          return flyer;
        }
      }
  ).map(filteredFlyers => {
    return filteredFlyers
  })

};

export const filterAction = (classList) => {

  const filterValue = Object.values(classList).filter(f => f === 'clear')

  return filterValue.length ? true : false
}

