import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Button, Overlay } from 'react-native-elements';
import Modal from '../Modal';

const AccountOptions = ({
  user: {
    uid,
    displayName,
    photoURL,
    email,
  },
  toastRef,
}) => {

  const menuOptions = [
    {
      title: 'Editar nombre',
      iconType: 'material-community',
      iconLeftName: 'account-circle',
      iconLeftColor: '#ccc',
      onPress: () => selectComponent('name'),
    },
    {
      title: 'Editar email',
      iconType: 'material-community',
      iconLeftName: 'at',
      iconLeftColor: '#ccc',
      onPress: () => selectComponent('email'),
    },
    {
      title: 'Cambiar contraseña',
      iconType: 'material-community',
      iconLeftName: 'lock-reset',
      iconLeftColor: '#ccc',
      onPress: () => selectComponent('password'),
    },
  ];

  const selectComponent = (action) => {
    setIsVisible(true);
  }

  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <View>
      {
        menuOptions.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            leftIcon={{
              type: item.iconType,
              name: item.iconLeftName,
              color: item.iconLeftColor,
            }}
            rightIcon={{
              type: 'material-community',
              name: 'chevron-right',
              color: '#ccc',
            }}
            containerStyle={styles.menuItem}
            onPress={item.onPress}
          />
        ))
      }
      <Modal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      >
        <>
          <Text>This is a modal</Text>
          <Button title="Cerrar" onPress={() => setIsVisible(false)} />
        </>
      </Modal>
    </View>
  )
};
 
export default AccountOptions;

const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
});
