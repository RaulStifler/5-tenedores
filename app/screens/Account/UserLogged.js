import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as firebase from 'firebase';

const UserLogged = () => {
  return (
    <View>
      <Text>User Logged</Text>
      <Button title="Cerrar sesión" onPress={() => firebase.auth().signOut()} />
    </View>
  )
}

export default UserLogged;

const styles = StyleSheet.create({})
