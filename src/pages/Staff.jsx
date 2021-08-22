import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default class Staff extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Card pfp="https://cdn.discordapp.com/avatars/699536434260082738/f65ae38f098c421b26d26d25333e9a1d.webp?size=256" user="daniellaUwU" description="Discord Moderator in Jar hangout" />
      </div>
    )
  }
}