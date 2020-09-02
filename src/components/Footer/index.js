import React, { Component } from "react";
import "./style.css";
import { Menu, Icon } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <div>
        <Menu size="large" className="footer" fixed={"bottom"} color="teal">
          &copy; Made with <Icon color="red" name="heart" />
        </Menu>
      </div>
    );
  }
}

export default Footer;
