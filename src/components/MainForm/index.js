import React, { Component } from "react";
import {
  Form,
  Input,
  TextArea,
  Button,
  Grid,
  Card,
  Icon,
  Transition,
} from "semantic-ui-react";

class MainForm extends Component {
  render() {
    return (
      <Grid centered>
        <Transition
          animation="fade up"
          duration={1700}
          visible
          transitionOnMount
        >
          <Card
            style={{
              color: "rgb(27, 187, 187)",
              width: "40rem",
            }}
          >
            <Card.Content textAlign="left">
              <h2>
                Contact Me!{"  "}
                <Icon name="comment alternate" color="black" size="small" />
              </h2>
            </Card.Content>
            <Card.Content>
              <Form>
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
                />
                <Button
                  id="form-button-control-public"
                  as="a"
                  href="mailto:cereyes1792@outlook.com"
                  content="Send"
                  color="teal"
                />
              </Form>
            </Card.Content>

            <Card.Content extra>
              <Button
                as="a"
                href="https://github.com/Creyes17e"
                target="blank"
                icon
                basic
                color="teal"
                compact
                circular
              >
                <Icon
                  name="github"
                  color="black"
                  size="large"
                  link
                  to="https://github.com/Creyes17e"
                />
              </Button>
              <Button
                as="a"
                href="https://www.linkedin.com/in/carina-reyes-21b6701a2/"
                target="blank"
                icon
                basic
                color="teal"
                compact
                circular
              >
                <Icon name="linkedin" color="blue" size="large" />
              </Button>
            </Card.Content>
          </Card>
        </Transition>
      </Grid>
    );
  }
}

export default MainForm;
