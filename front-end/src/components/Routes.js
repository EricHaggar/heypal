import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/results" component={ResultsPage} />
      </Switch>
    );
  }
}

export default Routes;
