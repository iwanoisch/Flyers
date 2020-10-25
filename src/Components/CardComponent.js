import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react'


const CardComponent = ({flyer = [], isPublished = 0, isExpired = false, addFavorite, isFavourite}) => {
  const {retailer = '', title = '', category = '', id = 0} = flyer
// eslint-disable-next-line
  return <>
      { !isExpired || isPublished === 1 && <div className={"column"}>
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false}/>
        <Card.Content>
          <Card.Meta className={'retailer header alignLeftText'}>{retailer}</Card.Meta>
          <Card.Header className={'alignLeftText'} style={{margin: "5px 10px 0px 0px", color: 'rgb(43, 43, 43)'}}>{title}</Card.Header>
          <Card.Description className={'alignLeftText'}>{category}</Card.Description>
        </Card.Content>
        <Card.Content extra className={'alignLeftText'}>
          <Icon onClick={() => addFavorite(id)} name={isFavourite ? 'heart' : 'heart outline'}/>
        </Card.Content>
      </Card>
    </div>}
  </>
};
export default CardComponent;