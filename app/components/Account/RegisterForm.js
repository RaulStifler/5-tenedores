import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements';


const RegisterForm = () => (
  <View style={styles.formContainer}>
    <Input
      placeholder="Correo electronico"
      containerStyle={styles.inputForm}
    />
    <Input
      placeholder="Contraseña"
      containerStyle={styles.inputForm}
      secureTextEntry
    />
    <Input
      placeholder="Repetir contraseña"
      containerStyle={styles.inputForm}
      secureTextEntry
    />
    <Button
      title="Unirte"
      buttonStyle={styles.buttonRegister}
    />
  </View>
)

export default RegisterForm

const styles = StyleSheet.create({
  formContainer: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 30,
  },
  inputForm: {
    width: '100%',
    // marginTop: 20,
  },
  buttonRegister: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#00A680',
  }
})
