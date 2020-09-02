import React from "react";
import { Segment } from "semantic-ui-react";
import MainForm from "../components/MainForm/index";

const Contact = () => (
  <div className="mainForm">
    <style>
      {`
      body{
        background-color:rgb(27, 187, 187);
      }
      .mainForm{
        margin-top:2rem !important;
        padding-top:1.5rem;
        padding-bottom:8rem;
      }
      `}
    </style>
    <MainForm />
  </div>
);

export default Contact;
