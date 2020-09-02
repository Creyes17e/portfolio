import React from "react";
import { Item, Icon, Divider, Container, List } from "semantic-ui-react";

function Resume() {
  return (
    <div>
      <style>
        {`
      body{
        background-color:rgba(27, 187, 187, 0.5);
      }
      .resumeContainer{
        background-color:white;
        padding: 1rem 1rem;
        margin-bottom:4rem;
      }
      `}
      </style>
      <Container className="resumeContainer">
        <Item.Content>
          <Item.Header
            as="h2"
            size="large"
            style={{
              color: "rgb(27, 187, 187)",
              fontFamily: "Satisfy, cursive",
            }}
          >
            Objective
          </Item.Header>
          <Item.Description style={{ padding: "1rem" }}>
            <p>
              Driven newly graduated web developer offering enthusiasm and
              understanding of various full-stack languages. Looking to join an
              organization where opportunity for growth and professional
              development is embraced.
            </p>
          </Item.Description>
          <Divider />
        </Item.Content>
        <Item.Content>
          <Item.Header
            as="h2"
            size="large"
            style={{
              color: "rgb(27, 187, 187)",
              fontFamily: "Satisfy, cursive",
            }}
          >
            Skills
          </Item.Header>
          <Item.Description style={{ padding: "1rem" }}>
            <p>Group learning mechanics</p>
            <p>Web user interfaces</p>
            <p>Web development projects</p>
            <p>Project organization</p>
            <p>Customer Service</p>
            <p>Agile workflow process</p>
            <p>User expecations</p>
          </Item.Description>
          <Divider />
        </Item.Content>
        <Item.Content>
          <Item.Header
            as="h2"
            size="large"
            style={{
              color: "rgb(27, 187, 187)",
              fontFamily: "Satisfy, cursive",
            }}
          >
            Work History
          </Item.Header>
          <Item.Description style={{ padding: "1rem" }}>
            <List as="ul">
              <List.Item as="li">
                Designed, implemented and monitored web pages and sites for
                continuous improvement.
              </List.Item>
              <List.Item as="li">
                Tested websites and performed troubleshooting prior to
                deployment.
              </List.Item>
              <List.Item as="li">
                Created site layout and user interface using HTML and CSS
                practices.
              </List.Item>
              <List.Item as="li">
                Designed sites to be compatible with top browsers, including
                Firefox, Chrome and Safari.
              </List.Item>
              <List.Item as="li">
                Built website interfaces with HTML and CSS.
              </List.Item>
              <List.Item as="li">
                Studied basic project requirements with assigned technical lead
                and planned development strategies.
              </List.Item>
              <List.Item as="li">
                Troubleshot and debugged code ensuring compatibility with
                devices, browsers, and operating systems.
              </List.Item>
            </List>
          </Item.Description>
          <Divider />
        </Item.Content>
      </Container>
    </div>
  );
}

export default Resume;
