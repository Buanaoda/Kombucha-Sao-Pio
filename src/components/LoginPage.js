/* JMJ */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../actions/auth';
import { firebase } from '../firebase/firebase';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: props.login ? props.login.toString() : '',
      password: props.password ? props.password.toString() : ''
    };
  }
  onLoginChange = (e) => {
    const login = e.target.value;
    this.setState(() => ({ login }));
  };
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  };
  onSubmit = () => {
    const loginData = {
      login: this.state.login,
      password: this.state.password
    };
    this.props.startLogin(loginData);
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div className="content-container">
        <div className="content-container__login-page">
          <form className="box-layout__box" onSubmit={this.onSubmit}>
            <h1 className="box-layout__title">Kombucha São Pio</h1>
            <input
              type="text"
              placeholder="login"
              autoFocus
              value={this.state.login}
              onChange={this.onLoginChange}
            />
            <input
              type="password"
              placeholder="senha"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
            <button className="button">Login</button>
            <p className="box-layout__text">
              Área do administrador, necessário realizar o login.
          </p>
          </form>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: (email, password) => dispatch(startLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);














/* JMJ */
// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { startLogin } from '../actions/auth';

// export const LoginPage = ({ startLogin }) => (
//     <form className="box-layout__box">
//       <h1 className="box-layout__title">Kombucha São Pio</h1>
//       <input placeholder="login" value={}/>
//       <input placeholder="senha" value={}/>
//       <button onClick={startLogin(email, password)}>
//         Login
//       </button>
//       <p className="box-layout__text">
//         Área do administrador, necessário realizar o login.
//       </p>
//     </form>
// );

// const mapStateToProps = (state, props) => ({
//   post: state.posts.find((post) => post.id === props.match.params.id)
// });

// const mapDispatchToProps = (dispatch) => ({
//   startLogin: (email, password) => dispatch(startLogin(email, password))
// });

// export default connect(undefined, mapDispatchToProps)(LoginPage);














