import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import AvatarDefault from '../../../assets/img/avatar-default.jpg';
import * as firebase from 'firebase';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const InfoUser = ({
  user: {
    uid,
    displayName,
    photoURL,
    email,
  },
  toastRef,
  setShowLoading,
  setTextLoading,
}) => {

  const changeAvatar = async () => {
    const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'denied') {
      toastRef.current.show('Debes aceptar permisos');
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
      });
      if (result.cancelled) {
        toastRef.current.show('Operacion cancelada');
      } else {
        uploadImage(result.uri)
          .then(() => updatePhotoUrl())
          .catch(() => toastRef.current.show('Error al subir avatar'));
      }
    }
  }
  
  const uploadImage = async (uri) => {
    setTextLoading('Subiendo imagen');
    setShowLoading(true);
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase.storage().ref().child(`avatar/${uid}`);
    return ref.put(blob)
  }

  const updatePhotoUrl = () => {
    firebase.storage().ref(`avatar/${uid}`).getDownloadURL()
      .then(async (response) => {
        const update = {
          photoURL: response,
        };
        await firebase.auth().currentUser.updateProfile(update)
        setShowLoading(false);
      })
      .catch((error) => {
        setShowLoading(false);
        toastRef.current.show(error);
      });
  }

  return (
    <View style={styles.userInfo}>
      <Avatar
        rounded
        size="large"
        showAccessory
        onAccessoryPress={changeAvatar}
        containerStyle={styles.containerAvatar}
        source={
          photoURL
            ? { uri: photoURL }
            : require('../../../assets/img/avatar-default.jpg')
        }
      />
      <View>
        <Text style={styles.nameLabel}>
          {displayName ? displayName : 'Sin nombre'}
        </Text>
        <Text>
          {email ? email : 'Social login'}
        </Text>
      </View>
    </View>
  )
}

export default InfoUser

const styles = StyleSheet.create({
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: '#f2f2f2',
    paddingTop: 30,
    paddingBottom: 30,
  },
  containerAvatar: {
    marginRight: 20,
    backgroundColor: '#ccc',
  },
  nameLabel: {
    fontWeight: 'bold',
    paddingBottom: 5,
  }
})
