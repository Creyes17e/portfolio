import React from "react";
import { Card, Image, Transition } from "semantic-ui-react";
import burger from "../assets/images/burger.JPG";
import scheduler from "../assets/images/scheduler.JPG";
import project1 from "../assets/images/project1.JPG";
import notetaker from "../assets/images/notetaker.JPG";
import ideaexpo from "../assets/images/ideaexpo.JPG";
import weather from "../assets/images/weather.PNG";
import budget from "../assets/images/budget.JPG";

const Projects = () => (
  <div>
    <style>
      {`
      body{
        background-color:rgba(27, 187, 187, 0.5);
      }
      `}
    </style>
    <Card.Group
      itemsPerRow={4}
      centered
      stackable
      style={{ paddingTop: "2rem", paddingBottom: "4rem" }}
    >
      <Transition animation="bounce" duration={1200} visible transitionOnMount>
        <Card>
          <Image src={scheduler} />
          <Card.Content textAlign="center">
            <Card.Header
              href="https://creyes17e.github.io/HW5-WorkDayScheduler/"
              target="blank"
            >
              Work Day Scheduler
            </Card.Header>
            <Card.Content
              extra
              href="https://github.com/Creyes17e/HW5-WorkDayScheduler.git"
              target="blank"
            >
              Github Repo
            </Card.Content>
          </Card.Content>
        </Card>
      </Transition>
      <Transition animation="bounce" duration={1100} visible transitionOnMount>
        <Card>
          <Image src={burger} />
          <Card.Content textAlign="center">
            <Card.Header
              href="https://fringuante-moliere-60605.herokuapp.com"
              target="blank"
            >
              Eat-Da-Burger!
            </Card.Header>
            <Card.Content
              extra
              href="https://github.com/Creyes17e/burger.git"
              target="blank"
            >
              Github Repo
            </Card.Content>
          </Card.Content>
        </Card>
      </Transition>
      <Transition animation="bounce" duration={1000} visible transitionOnMount>
        <Card>
          <Image src={project1} />
          <Card.Content textAlign="center">
            <Card.Header
              href="https://ta05.github.io/Deal-Or-No-Deal/intro.html"
              target="blank"
            >
              Deal or No Deal
            </Card.Header>
            <Card.Content
              href="https://github.com/ta05/Deal-Or-No-Deal.git"
              target="blank"
            >
              Github Repo
            </Card.Content>
          </Card.Content>
        </Card>
      </Transition>
      <Transition animation="bounce" duration={900} visible transitionOnMount>
        <Card>
          <Image src={ideaexpo} />
          <Card.Content textAlign="center">
            <Card.Header href="http://ideaexpo.herokuapp.com/" target="blank">
              IdeaEXPO
            </Card.Header>
            <Card.Content
              extra
              href="https://github.com/szaster/IdeaEXPO.git"
              target="blank"
            >
              Github Repo
            </Card.Content>
          </Card.Content>
        </Card>
      </Transition>
      <Transition animation="bounce" duration={800} visible transitionOnMount>
        <Card>
          <Image src={weather} />
          <Card.Content textAlign="center">
            <Card.Header
              href="https://creyes17e.github.io/HW6-WeatherDashboard/"
              target="blank"
            >
              Weather Dashboard
            </Card.Header>
            <Card.Content
              extra
              href="https://github.com/Creyes17e/HW6-WeatherDashboard.git"
              target="blank"
            >
              Github Repo
            </Card.Content>
          </Card.Content>
        </Card>
      </Transition>
      <Transition animation="bounce" duration={700} visible transitionOnMount>
        <Card>
          <Image src={notetaker} size="massive" />
          <Card.Content textAlign="center">
            <Card.Header
              href="https://vast-shore-69093.herokuapp.com/"
              target="blank"
            >
              Note-Taker
            </Card.Header>
            <Card.Content
              extra
              href="https://github.com/Creyes17e/note-taker.git"
              target="blank"
            >
              Github Repo
            </Card.Content>
          </Card.Content>
        </Card>
      </Transition>
      <Transition animation="bounce" duration={700} visible transitionOnMount>
        <Card>
          <Image src={budget} />
          <Card.Content textAlign="center">
            <Card.Header
              href="https://mysterious-chamber-97655.herokuapp.com/"
              target="blank"
            >
              Budget Tracker
            </Card.Header>
            <Card.Content
              extra
              href="https://github.com/Creyes17e/budget-tracker.git"
              target="blank"
            >
              Github Repo
            </Card.Content>
          </Card.Content>
        </Card>
      </Transition>
    </Card.Group>
  </div>
);

export default Projects;
