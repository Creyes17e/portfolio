import React, { Component } from "react";
import {
  Form,
  Input,
  TextArea,
  Button,
  Grid,
  Container,
  Segment,
} from "semantic-ui-react";
import "./style.css";

class MainForm extends Component {
  render() {
    return (
      // <Grid stackable centered className="mainForm">
      //   <Grid.Row>
      //     <Grid.Column>
      <div>
        <Form className="contactForm">
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="First name"
              placeholder="First name"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Last name"
              placeholder="Last name"
            />
          </Form.Group>
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            placeholder="Message"
          />
          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            htmlFor="Email"
            label="Email"
            placeholder="mac@cheese.com"
            error={{
              content: "Please enter a valid email address",
              pointing: "below",
            }}
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Send"
            // href="mailto:cereyes1792@outlook.com"
          />
        </Form>
      </div>

      // // </Grid.Column>
      // // {/* <Grid.Column>
      //   <Icon
      //     name="github square"
      //     size="big"
      //     href="https://github.com/Creyes17e"
      //     target="blank"
      //   />
      //   <Icon
      //     name="linkedin"
      //     href="https://www.linkedin.com/in/carina-reyes-21b6701a2/"
      //     target="blank"
      //   />
      // </Grid.Column> */}
      //   </Grid.Row>
      // </Grid>
    );
  }
}

export default MainForm;
