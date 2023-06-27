import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const authProvider = (type, params) => {
 const auth = getAuth();

 if (type === AUTH_LOGIN) {
  console.log("hoi")
  const { username, password } = params;
  return signInWithEmailAndPassword(auth, username, password).then((uc) => {
   return Promise.resolve();
  }).catch(() => {
   return Promise.reject();
  });
 }

 if (type === AUTH_LOGOUT) {
  return auth.signOut().then(() => {
   localStorage.removeItem('username');
   return Promise.resolve();
  }).catch(() => {
   return Promise.reject();
  });
 }

 if (type === AUTH_ERROR) {
  const { status } = params;
  if (status === 401) {
   localStorage.removeItem('username');
   return Promise.reject();
  }
  return Promise.resolve();
 }

 if (type === AUTH_CHECK) {
  return checkAuth();
 }

 return Promise.reject('Unknown method');
};

const checkAuth = () => {
 return new Promise((resolve, reject) => {
  const unsubscribe = getAuth().onAuthStateChanged((user) => {
   unsubscribe();
   if (user) {
    resolve();
   } else {
    reject();
   }
  });
 });
};
