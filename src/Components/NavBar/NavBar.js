import React, {Component} from "react";
import {
  Container,
  Icon,
  Menu,
  Sidebar,
  Responsive,
  Card, Feed, List
} from "semantic-ui-react";

const NavBarMobile = ({
                        children,
                        onPusherClick,
                        onToggle,
                        visible,
                        favouriteList = {}
                      }) => {

  const rowFavourite = Object.values(favouriteList).map(list => <div key={list.id} className={'itemListContent'}>
      <List.Item className={'sidebarItem listItem itemListHover'} style={{borderRadius: '5px !important'}} >
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
        <Card>
          <Card.Content className={'cardPadding'}>
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

const NavBarChildren = ({children}) => (
  <Container style={{marginTop: "5em"}}>{children}</Container>
);

class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const {visible} = this.state;

    if (visible) this.setState({visible: false});
  };

  handleToggle = () => this.setState({visible: !this.state.visible});

  render() {
    const {children, rightItems} = this.props;
    const {visible} = this.state;

    return (

      <div>
        <Responsive>
          <NavBarMobile
            favouriteList={this.props.favouriteList}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}>
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
      </div>
    );
  }
}

export default NavBar