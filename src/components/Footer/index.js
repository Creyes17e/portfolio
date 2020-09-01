import React, { Component } from "react";
import "./style.css";
import { Menu, Icon } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <Menu size="large" color="teal" className="footer" fixed={"bottom"}>
        &copy; Made with <Icon color="red" name="heart" />
      </Menu>
    );
  }
}

export default Footer;
