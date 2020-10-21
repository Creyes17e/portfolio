import React, { Component } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert2";
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
    const handleFormSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            swal.fire(
              "Message Sent",
              "Carina will get back to you as soon as she can!",
              "success"
            );
          },
          (error) => {
            console.log(error.text);
            swal.fire("Message Error", error.text, "error");
          }
        );
      e.target.reset();
    };
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
              <h2>Contact Me!{"  "}</h2>
            </Card.Content>
            <Card.Content>
              <div>
                <Form onSubmit={handleFormSubmit}>
                  <Form.Field
                    id="form-input-control-first-name"
                    control={Input}
                    label="Name"
                    placeholder="Full Name"
                    required
                    name="user_name"
                    icon="user circle"
                    iconPosition="left"
                  />

                  <Form.Field
                    id="form-input-control-error-email"
                    control={Input}
                    htmlFor="Email"
                    label="Email"
                    placeholder="mac@cheese.com"
                    required
                    name="user_email"
                    icon="mail"
                    iconPosition="left"
                  />
                  <Form.Field
                    id="form-textarea-control-opinion"
                    control={TextArea}
                    label="Message"
                    placeholder="Message"
                    required
                    name="user_message"
                  />
                  <Button
                    id="form-button-control-public"
                    as="a"
                    content="Send"
                    color="teal"
                    icon="send"
                  />
                </Form>
              </div>
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
