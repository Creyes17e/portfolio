import React, { Component } from "react";
import "./style.css";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Header extends Component {
  //Changes the state of the tab currently clicked
  state = { activeItem: "About" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted className="nav" size="massive">
        <h1 className="myname">Carina Reyes</h1>
        <Menu inverted size="large" pointing secondary>
          <Menu.Item
            as={Link}
            to="/resume"
            name="Resume"
            active={activeItem === "Resume"}
            onClick={this.handleItemClick}
            position="left"
          />
          <Menu.Item
            as={Link}
            to="/"
            name="About"
            active={activeItem === "About"}
            onClick={this.handleItemClick}
            position="right"
          />
          <Menu.Item
            as={Link}
            to="/projects"
            name="Projects"
            active={activeItem === "Projects"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/contact"
            name="Contact"
            active={activeItem === "Contact"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}

export default Header;
