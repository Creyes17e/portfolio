import React from "react";
import {
  Segment,
  Image,
  Icon,
  Grid,
  Card,
  Transition,
  Item,
  Container,
  Button,
  Divider,
} from "semantic-ui-react";
import mypic from "../assets/images/me.jpg";
// import placeholder from "https://via.placeholder.com/150";

const About = () => (
  <div className="BG">
    <style>
      {`
      body{
        background-color:rgba(27, 187, 187, 0.5);
      }
      `}
    </style>
    <Grid stackable centered>
      <Grid.Row>
        <Grid.Column textAlign="center" className="col-about">
          <Item.Group>
            <Item style={{ padding: "1.5rem" }}>
              <Transition
                duration={1500}
                visible
                transitionOnMount
                animation="shake"
              >
                <Image
                  src={mypic}
                  size="large"
                  className="aboutPic"
                  circular
                  centered
                  alt="a picture of myself"
                  style={{ marginRight: "2rem" }}
                />
              </Transition>
              <Transition
                animation="shake"
                duration={1400}
                visible
                transitionOnMount
              >
                <Segment
                  style={{
                    backgroundColor: "white",
                    padding: "3rem",
                  }}
                  circular
                  compact
                >
                  <Item.Content>
                    <Item.Header
                      as="h2"
                      size="large"
                      style={{
                        color: "rgb(27, 187, 187)",
                        fontFamily: "Satisfy, cursive",
                      }}
                    >
                      A Full-Stack Developer
                    </Item.Header>
                    <Item.Description style={{ padding: "1rem" }}>
                      <p>
                        <Icon color="teal" name="angle right right" />
                        Hi there! My name is Carina and I am a web developer. I
                        enjoy creating accessible websites and debugging.
                      </p>
                      <Divider />
                      <p>
                        <Icon color="teal" name="angle right right" />
                        During my spare time I watch documentaries or series
                        from Netflix, Hulu, & HBO. I also attend Brazilian Jiu
                        Jitsu classes and currently hold a blue belt.
                      </p>
                      <Divider />
                      <p>
                        <Icon color="teal" name="angle right right" />I was born
                        and raised in Houston TX, but my family is from El
                        Salvador. I speak two languages Spanish and English,
                        Spanish is my first language.
                      </p>
                      <Divider />
                      <p>
                        <Icon color="teal" name="angle right right" />I
                        graduated with a bachelor's degree in Mathematics from
                        the University of Houston. At this moment I am working
                        on my certificate from the Houston Coding Bootcamp UT.
                      </p>
                    </Item.Description>
                  </Item.Content>
                </Segment>
              </Transition>
            </Item>
          </Item.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default About;
