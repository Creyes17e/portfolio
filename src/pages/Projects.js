import React from "react";
import { Card, Image, Grid, Segment } from "semantic-ui-react";
import burger from "../assets/images/burger.JPG";
import scheduler from "../assets/images/scheduler.JPG";
import project1 from "../assets/images/project1.JPG";
import notetaker from "../assets/images/notetaker.JPG";
import ideaexpo from "../assets/images/ideaexpo.JPG";
import weather from "../assets/images/weather.PNG";

const Projects = () => (
  <div>
    <Segment color="teal">
      <style>
        {`
      body{
        background-color:rgb(27, 187, 187);
      }
      `}
      </style>
      <Card.Group itemsPerRow={3}>
        <Card>
          <Image src={scheduler} />
          <Card.Content>
            <Card.Header>
              <a
                href="https://creyes17e.github.io/HW5-WorkDayScheduler/"
                target="blank"
              >
                Work Day Scheduler
              </a>
            </Card.Header>
            <Card.Content extra>
              <a
                href="https://github.com/Creyes17e/HW5-WorkDayScheduler.git"
                target="blank"
              >
                Github Repo
              </a>
            </Card.Content>
          </Card.Content>
        </Card>
        <Card>
          <Image src={burger} />
          <Card.Content>
            <Card.Header>
              <a
                href="https://fringuante-moliere-60605.herokuapp.com"
                target="blank"
              >
                Eat-Da-Burger!
              </a>
            </Card.Header>
            <Card.Content extra>
              <a href="https://github.com/Creyes17e/burger.git" target="blank">
                Github Repo
              </a>
            </Card.Content>
          </Card.Content>
        </Card>
        <Card>
          <Image src={project1} />
          <Card.Content>
            <Card.Header>
              <a
                href="https://ta05.github.io/Deal-Or-No-Deal/intro.html"
                target="blank"
              >
                Deal or No Deal
              </a>
            </Card.Header>
            <Card.Content>
              <a
                href="https://github.com/ta05/Deal-Or-No-Deal.git"
                target="blank"
              >
                Github Repo
              </a>
            </Card.Content>
          </Card.Content>
        </Card>
        <Card>
          <Image src={ideaexpo} />
          <Card.Content>
            <Card.Header>
              <a href="http://ideaexpo.herokuapp.com/" target="blank">
                IdeaEXPO
              </a>
            </Card.Header>
            <Card.Content extra>
              <a href="https://github.com/szaster/IdeaEXPO.git" target="blank">
                Github Repo
              </a>
            </Card.Content>
          </Card.Content>
        </Card>
        <Card>
          <Image src={weather} />
          <Card.Content>
            <Card.Header>
              <a
                href="https://creyes17e.github.io/HW6-WeatherDashboard/"
                target="blank"
              >
                Weather Dashboard
              </a>
            </Card.Header>
            <Card.Content extra>
              <a
                href="https://github.com/Creyes17e/HW6-WeatherDashboard.git"
                target="blank"
              >
                Github Repo
              </a>
            </Card.Content>
          </Card.Content>
        </Card>
        <Card>
          <Image src={notetaker} />
          <Card.Content>
            <Card.Header>
              <a href="https://vast-shore-69093.herokuapp.com/" target="blank">
                Note-Taker
              </a>
            </Card.Header>
            <Card.Content extra>
              <a
                href="https://github.com/Creyes17e/note-taker.git"
                target="blank"
              >
                Github Repo
              </a>
            </Card.Content>
          </Card.Content>
        </Card>
      </Card.Group>
    </Segment>
  </div>
);

export default Projects;
