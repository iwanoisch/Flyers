import React from 'react';
import CardComponent from "./CardComponent";
import {Input} from "semantic-ui-react";
import FlyFilterBy from "./FlyFilterBy";


const FlyersComponent = ({
                           flyerList = {},
                           addFavorite,
                           doSearch,
                           retailers = {},
                           filteredBy,
                           dropdownValue = undefined,
                           clearBtnToggle,
                           inputValue
                         }) => {

  const flyerCard = flyerList.length ? Object.values(flyerList).map(flyer => (
      <CardComponent key={flyer.id} isExpired={flyer.isExpired} isPublished={flyer.is_published} flyer={flyer}
                     addFavorite={addFavorite} isFavourite={flyer.isFavourite}/>
  )) : <div className={'ui container notfound'}>La ricerca non ha prodotto risultati</div>;

  return <>
    <div className={'ui container '}>

      <Input className={'input-search container'} size={'massive'} iconPosition='left' labelPosition={'left'}
             value={inputValue} icon='search' placeholder='Search a Flayer'
             onChange={event => doSearch(event.target.value)}/>

      <FlyFilterBy retailers={retailers} filteredBy={filteredBy} dropdownValue={dropdownValue}
                   clearBtnToggle={clearBtnToggle}/>

      <div className={"ui container doubling four column grid flyer_card"}>
        {flyerCard}
      </div>
    </div>
  </>
};

export default FlyersComponent;
