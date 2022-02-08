import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react'

const emptyImage = require('../Images/empty.png');

const CardComponent = ({flyer = [], isPublished = 0, isExpired = false, addFavorite, isFavourite}) => {
  const {retailer = '', title = '', category = '', id = 0} = flyer
  const showCard = !isExpired || isPublished === 1

  return <>
      { showCard && <div className={"column"}>
      <Card>
        <Image src={emptyImage} wrapped ui={false}/>
        <Card.Content>
          <Card.Meta className={'retailer header alignLeftText'}>{retailer.name}</Card.Meta>
          <Card.Header className={'alignLeftText title'} >{title}</Card.Header>
          <Card.Description className={'alignLeftText category'}>{category.name}</Card.Description>
        </Card.Content>
        <Card.Content extra className={'alignLeftText'}>
          <Icon size={'big'} onClick={() => addFavorite(id)} name={isFavourite ? 'heart' : 'heart outline'}/>
        </Card.Content>
      </Card>
    </div>}
  </>
};
export default CardComponent;
