import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import * as firebase from 'firebase';
import Loading from '../../components/Loading';
import InfoUser from './InfoUser';

const UserLogged = () => {
  const [showLoading, setshowLoading] = useState(false);
  const [textLoading, setTextLoading] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);
  const toastRef = useRef();

  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      setLoggedUser(user);
    })()
  }, [])

  return (
    <View style={styles.userInfo}>
      { loggedUser && <InfoUser user={loggedUser} />}
      <Text>Account option</Text>
      <Button
        title="Cerrar sesión"
        onPress={() => firebase.auth().signOut()}
        buttonStyle={styles.btn}
        titleStyle={styles.btnTitle}
      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading text={textLoading} isVisible={showLoading} />
    </View>
  )
}

export default UserLogged;

const styles = StyleSheet.create({
  userInfo: {
    width: '100%',
    backgroundColor: '#f2f2f2',
  },
  btn: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnTitle: {
    color: '#00A680'
  }
});
