import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Overlay } from 'react-native-elements';

const Modal = ({
  isVisible,
  setIsVisible,
  children,
}) => (
  <Overlay
    isVisible={isVisible}
    overlayStyle={styles.overlay}
    onBackdropPress={() => setIsVisible(false)}
  >
    {children}
  </Overlay>
);

export default Modal;

const styles = StyleSheet.create({
  overlay: {
    height: 'auto',
    width: '90%',
    backgroundColor: '#FFF'
  }
});
