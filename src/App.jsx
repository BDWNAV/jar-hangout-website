import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}
