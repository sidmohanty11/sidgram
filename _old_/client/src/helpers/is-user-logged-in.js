import propTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export default function IsUserLoggedIn({ user, children, loggedInPath, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) {
          return children;
        }
        if (user) {
          return (
            <Redirect
              to={{ pathname: loggedInPath, state: { from: location } }}
            />
          );
        }
        return null;
      }}
    />
  );
}

IsUserLoggedIn.propTypes = {
  user: propTypes.object,
  children: propTypes.object,
  loggedInPath: propTypes.string,
};
