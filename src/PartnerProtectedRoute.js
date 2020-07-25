import React from "react";
import { Route, Redirect } from "react-router-dom";
// import auth from "./Auth";
// import PartnerApp from "./components/partner/App";

const PartnerProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    // <PartnerApp>
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
        // if (auth.isAuthenticated) {
        //   return <Component {...props} />;
        // } else {
        //   return (
        //     // redirect if not authenticated, from propert of state is where the request is coming from
        //     <Redirect
        //       to={{
        //         pathname: "/login",
        //         state: { referrer: props.location.pathname },
        //       }}
        //     />
        //   );
        // }
      }}
    />
    // </PartnerApp>
  );
};

export default PartnerProtectedRoute;
