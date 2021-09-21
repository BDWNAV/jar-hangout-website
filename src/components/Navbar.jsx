import React from "react";
import { Link } from "react-router-dom";
import { staffIds } from "../Utils/utils";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="load">
          <ul className="navbar">
            <li className="items">
              <Link to="/">Home</Link>
            </li>
            <li className="items">
              <Link to="/staff">Staff</Link>
            </li>
            <li className="items">
              <Link to={staffIds.some((staffIds) => staffIds === this.props.userId) ? `/dash/staff/${this.props.userId}` : "/" }>
                Dash
              </Link>
            </li>
            <li className="items">
              <Link to="/suggestions/create">Suggestions</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}