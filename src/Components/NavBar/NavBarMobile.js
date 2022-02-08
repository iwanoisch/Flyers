import {Card, Feed, Icon, List, Menu, Sidebar} from "semantic-ui-react";
import React from "react";

const NavBarMobile = ({
                        children,
                        onPusherClick,
                        onToggle,
                        visible,
                        favouriteList = {},
                        favouriteToggle,
                      }) => {

  const rowFavourite = Object.values(favouriteList).map(list => <div key={list.id} className={'itemListContent'}>
        <List.Item className={'sidebarItem listItem itemListHover itemLIstBorder'} onClick={() => favouriteToggle(list.id)}>
          <Icon name={'heart'}/>
          <List.Content>
            <List.Header className={'listTitle'}>{list.title}</List.Header>
          </List.Content>
        </List.Item>
      </div>

  )

  return <>
    <Sidebar.Pushable>
      <Sidebar
          className={'sidebarMenu'}
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}>
        <Card className={'sidebar-top'}>
          <Card.Content className={'card-padding'}>
            <Feed>
              <Feed.Event>
                <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"/>
                <Feed.Content></Feed.Content>
              </Feed.Event>
            </Feed>
            <Card.Header className={'alignLeftText'}>Favourites</Card.Header>
            <Feed.Summary className={'alignLeftText'}>The list of your preferred flyers</Feed.Summary>
          </Card.Content>
        </Card>
        {rowFavourite.length === 0
            ? <div style={{minWidth: '150px', color: 'rgb(117,117,117)', background: 'white'}}>
              No more preferred flyers selected
            </div>
            : <List selection verticalAlign='middle'>{rowFavourite}</List>

        }
      </Sidebar>
      <Sidebar.Pusher
          dimmed={visible}
          onClick={onPusherClick}
          style={{minHeight: visible ? "100vh" : ''}}
      >
        <Menu fixed="top" inverted>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar"/>
          </Menu.Item>
          <Menu.Menu position="left">
            <div className={'left menu item'}>shopFully</div>
          </Menu.Menu>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </>
};

export default NavBarMobile;
