import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import "./fontawesome";
import * as serviceWorker from "./serviceWorker";
import PartnerProtectedRoute from "./PartnerProtectedRoute";
import PartnerDashboard from "./components/partner/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <PartnerProtectedRoute
          path="/partner/dashboard"
          component={PartnerDashboard}
        />
        <PartnerProtectedRoute
          path="/partner/jobs"
          component={PartnerDashboard}
        />
        <PartnerProtectedRoute
          path="/partner/requests"
          component={() => <h3>requests</h3>}
        />
        <Route component={() => <h3>404</h3>} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
