import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const InfoUser = ({
  user,
}) => {
  return (
    <View style={styles.userInfo}>
      <Avatar
        rounded
        size="large"
        showAccessory
        containerStyle={styles.containerAvatar}
      />
      <View>
        <Text style={styles.nameLabel}>
          Raul Stifler
        </Text>
        <Text>
          raulstifler25@gmail.com
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
