import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements';


const RegisterForm = () => {
  const [hidePassword, setHidePassword] = useState(true)
  const [hideRepeatPassword, setHideRepeatPassword] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
    rePass: '',
  })

  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text})
  }
  
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        onChange={ (e) => onChange(e, 'email')}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        secureTextEntry={hidePassword}
        onChange={ (e) => onChange(e, 'pass')}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={ () => setHidePassword(!hidePassword)}
          />
        }
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.inputForm}
        secureTextEntry={hideRepeatPassword}
        onChange={ (e) => onChange(e, 'rePass')}
        rightIcon={
          <Icon
            type="material-community"
            name={hideRepeatPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={ () => setHideRepeatPassword(!hideRepeatPassword)}
          />
        }
      />
      <Button
        title="Unirte"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonRegister}
        onPress={() => console.log(formData)}
      />
    </View>
  )
}

export default RegisterForm

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  inputForm: {
    width: '100%',
    // marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
  buttonRegister: {
    backgroundColor: '#00A680',
  },
  iconRight: {
    color: '#C1C1C1'
  },
})
