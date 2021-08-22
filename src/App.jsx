import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import "./css/App.css";

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/staff" component={Staff} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}
