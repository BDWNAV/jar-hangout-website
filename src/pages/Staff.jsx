import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default class Staff extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Card pfp="" user="" description="Discord Moderator in Jar hangout" />
      </div>
    )
  }
}