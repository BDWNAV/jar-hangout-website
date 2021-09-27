import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default class Staff extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Card pfp="https://cdn.bdwnav.tech/4oVH" user="Test" description="Discord Moderator in Jar hangout" />
      </div>
    )
  }
}