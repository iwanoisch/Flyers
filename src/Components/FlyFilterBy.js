import {Dropdown} from "semantic-ui-react";
import React from "react";

const FlyFilterBy = ({retailers = {}, filteredBy, dropdownValue = undefined, clearBtnToggle}) => {


  return <>
    <div className={'filter-container'}>
      <Dropdown value={Number(dropdownValue)} options={retailers} placeholder={'Retailers'} selection onChange={filteredBy}/>
      <div className="clear-button">
        <button className="ui button clear-button" onClick={clearBtnToggle}>
          Clear
        </button>
      </div>

    </div>
  </>
}

export default FlyFilterBy;
