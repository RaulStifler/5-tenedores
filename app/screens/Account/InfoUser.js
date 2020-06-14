import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import AvatarDefault from '../../../assets/img/avatar-default.jpg'

const InfoUser = ({
  user: {
    displayName,
    photoURL,
    email,
  },
}) => {
  return (
    <View style={styles.userInfo}>
      <Avatar
        rounded
        size="large"
        showAccessory
        containerStyle={styles.containerAvatar}
        source={ photoURL ? { uri: photoURL } : AvatarDefault}
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
