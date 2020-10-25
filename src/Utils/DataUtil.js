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


