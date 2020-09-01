import React from "react";
import {
  Segment,
  Image,
  Icon,
  Grid,
  Card,
  Transition,
} from "semantic-ui-react";
import mypic from "../assets/images/me.jpg";
// import placeholder from "https://via.placeholder.com/150";

const About = () => (
  <div>
    <style>
      {`
      body{
        background-color:rgb(27, 187, 187);
      }
      .col-image{
        padding:6rem;
        margin-left:8rem;
      }
      .col-about{
        padding:4rem;
        margin-left:8rem;
        margin-top:3rem;
      }
      .aboutCard{
        height:24rem;
      }
      
      p{
        color:black;
      }
      // a{
      //   margin-left:1rem
      // }
      // .fa-github {
      //   color: black;
      //   font-size:2rem
      // }
      // .fa-linkedin {
      //   color: #2867b2;
      //   font-size:2rem
      // }
      `}
    </style>
    <Grid stackable columns={2}>
      <Grid.Row>
        <Grid.Column width={5} className="col-image">
          <Transition
            animation="pulse"
            duration={1200}
            visible
            transitionOnMount
          >
            <Image
              src={mypic}
              size="large"
              className="aboutPic"
              circular
              centered
              alt="a picture of myself"
            />
          </Transition>
        </Grid.Column>

        <Grid.Column width={7} textAlign="center" className="col-about">
          <Transition
            animation="pulse"
            duration={1200}
            visible
            transitionOnMount
          >
            <Card fluid color="teal" className="aboutCard">
              <Card.Content
                header="Web Developer"
                className="aboutCardHeader"
              />
              <Card.Content>
                <p>
                  <Icon color="teal" name="angle right right" />
                  Hi there! My name is Carina and I am a web developer. I enjoy
                  creating accessible websites and debugging.
                </p>
                <p>
                  <Icon color="teal" name="angle right right" />
                  During my spare time I watch documentaries or series from
                  Netflix, Hulu, & HBO. I also attend Brazilian Jiu Jitsu
                  classes and currently hold a blue belt.
                </p>
                <p>
                  <Icon color="teal" name="angle right right" />I was born and
                  raised in Houston TX, but my family is from El Salvador. I
                  speak two languages Spanish and English, Spanish is my first
                  language.
                </p>
                <p>
                  <Icon color="teal" name="angle right right" />I graduated with
                  a bachelor's degree in Mathematics from the University of
                  Houston. At this moment I am working on my certificate from
                  the Houston Coding Bootcamp UT.
                </p>
              </Card.Content>
            </Card>
          </Transition>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default About;
