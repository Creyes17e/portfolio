import React, { Component } from "react";
import "./style.css";
import { Segment, Icon } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <Segment size="massive" color="teal">
        <p className="footer">
          &copy; Made with <Icon color="red" name="heart" />
        </p>
      </Segment>
    );
  }
}

export default Footer;
