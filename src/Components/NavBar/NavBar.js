import React, {Component} from "react";

import NavBarChildren from "./NavBarChildren";
import NavBarMobile from "./NavBarMobile";


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
          <NavBarMobile
            favouriteList={this.props.favouriteList}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            favouriteToggle={this.props.favouriteToggle}
            visible={visible}>
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
      </div>
    );
  }
}

export default NavBar
