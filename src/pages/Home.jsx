import React from "react";
import Header from "../components/Header";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <p>What is JAR hangout? Well JAR hangout is a awesome community with a bunch of cool and chill people, so if this interests you please feel free to join the following <a href="https://jarhangout.ml/">link</a>. We will be shortly be accepting new staff applications.</p>
        </div>
      </div>
    );
  }
}