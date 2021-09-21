import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 style={{fontSize: "40px"}}><b>Jar hangout</b></h1>
        <p>Welcome to the JAR hangout.</p>
      </div>
    )
  }
}