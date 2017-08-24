
import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => {
      if (loggedIn) {
        return <Redirect to="/stream" />;
      } else {
        return <Component {...props} />;
      }
  }}/>
);

const Protected = ({ component: Component, path, loggedIn }) => {
  return (
    <Route
      path={ path }
      render={ props => loggedIn ? <Component { ...props } /> : <Redirect to="/" />}
    />
  );
};

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
