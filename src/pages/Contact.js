import React from "react";
import { Segment } from "semantic-ui-react";
import MainForm from "../components/MainForm/index";

const Contact = () => (
  <Segment compact color="teal" className="segmentMain">
    <style>
      {`
      body{
        background-color:white;
        background-color:rgb(27, 187, 187);
      }
      .segmentMain{
        margin-left:23rem !important;
        margin-top:2rem !important;
      }
      `}
    </style>
    <MainForm />
  </Segment>
);

export default Contact;
