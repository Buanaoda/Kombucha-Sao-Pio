import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import AdminMenu from '../components/AdminMenu';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);






// import React from 'react';
// import { connect } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
// import Header from '../components/Header';
// import Menu from '../components/Menu';
// import AdminMenu from '../components/AdminMenu';

// export const PrivateRoute = ({
//   isAuthenticated,
//   component: Component,
//   ...rest
// }) => (
//   <Route {...rest} component={(props) => (
//     isAuthenticated ? (
//       <div>
//         <Header />
//         <AdminMenu />
//         <Component {...props} />
//       </div>
//     ) : (
//       <Redirect to="/" />
//     )
//   )}/>
// );

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.uid
// });

// export default connect(mapStateToProps)(PrivateRoute);