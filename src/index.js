import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import "./index.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./fontawesome";
import * as serviceWorker from "./serviceWorker";
import PartnerProtectedRoute from "./PartnerProtectedRoute";
import PartnerDashboard from "./components/partner/Dashboard";
import PartnerDetails from "./components/partner/profile/Details";
import PartnerChangePassword from "./components/partner/profile/ChangePassword";
import Clients from "./components/partner/clients/Clients";
import NewClient from "./components/partner/clients/NewClient";
import Addresses from "./components/partner/Addresses/Addresses";

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
          exact
          path="/partner/clients"
          component={Clients}
        />
        <PartnerProtectedRoute
          exact
          path="/partner/clients/new"
          component={NewClient}
        />

        <PartnerProtectedRoute
          path="/partner/clients/:client_id/addresses"
          component={Addresses}
        />
        <PartnerProtectedRoute
          path="/partner/account/details"
          component={PartnerDetails}
        />
        <PartnerProtectedRoute
          path="/partner/account/change-password"
          component={PartnerChangePassword}
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
