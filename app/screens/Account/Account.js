import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import UserLogged from './UserLogged';
import UserGuest from './UserGuest';
import { Text } from 'react-native';

const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
    })
  }, [login])

  return login === null ? <Text>Cargando...</Text> : login ? <UserLogged /> : <UserGuest />
}

export default Account;
