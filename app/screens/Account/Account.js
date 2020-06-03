import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import UserLogged from './UserLogged';
import UserGuest from './UserGuest';
import Loading from '../../components/Loading';

const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
    })
  }, [login])

  return login === null ? <Loading isVisible={true} text="Verificando sesion" /> : login ? <UserLogged /> : <UserGuest />
}

export default Account;
