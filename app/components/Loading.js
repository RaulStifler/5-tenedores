import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';

const Loading = ({
  isVisible,
  text,
}) => (
  <Overlay
    isVisible={isVisible}
    windowBackgroundColor="rgba(0,0,0, 0.5)"
    overlayBackgroundColor="transparent"
    overlayStyle={styles.overlay}
  >
    <View style={styles.view}>
      <ActivityIndicator size="large" color="#00A680" />
      { text && <Text style={styles.text}>{text}</Text>}
    </View>
  </Overlay>
)

export default Loading

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#FFF",
    borderColor: "#00A680",
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#00A680",
    textTransform: "uppercase",
    marginTop: 10,
  }
})
