import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.pfp} alt="pfp" style={{width: "100%"}} />
        <h1>{this.props.user}</h1>
        <p className="title">{this.props.description}</p>
        <button className="profile-button">{this.props.user}</button>
      </div>
    )
  }
} 