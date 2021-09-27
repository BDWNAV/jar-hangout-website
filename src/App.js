import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import StaffDashboard from "./pages/StaffDashboard";
import Suggestion from "./pages/Suggestion";
import "./css/app.css";

export default function App() {
  return (
    <main>
      <Switch>
        <Route path="/suggestions/create" component={Suggestion} />
        <Route path="/dash/staff/:userId" component={StaffDashboard} />
        <Route path="/staff" component={Staff} />
        <Route path="/" component={Home} />
      </Switch> 
    </main>
  );
}
