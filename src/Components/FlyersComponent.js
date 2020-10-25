import React from 'react';
import CardComponent from "./CardComponent";


const FlyersComponent = ({flyers = {}, addFavorite}) => {

  const flyerCard = Object.values(flyers).map(flyer => (
    <CardComponent key={flyer.id} isExpired={flyer.isExpired} isPublished={flyer.is_published} flyer={flyer}
                   addFavorite={addFavorite} isFavourite={flyer.isFavourite}/>
  ));

  return <>
    <div className={"ui container doubling four column grid"}>
      {flyerCard}
    </div>
  </>
};

export default FlyersComponent;