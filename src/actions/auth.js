import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = (loginData) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(loginData.login, loginData.password)
      .catch(error => {
        alert(error.code)
    })
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
