import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements';
import { validateEmail } from '../../utils/validations';
import { size, isEmpty } from 'lodash';
import * as firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';
import Loading from '../Loading';

const RegisterForm = ({
  toastRef,
}) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [registrandoUsuario, setRegistrandoUsuario] = useState(false)
  const [hideRepeatPassword, setHideRepeatPassword] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
    rePass: '',
  })
  const navigation = useNavigation();

  const onSubmit = () => {
    if (isEmpty(formData.email) || isEmpty(formData.pass) || isEmpty(formData.rePass)) {
      toastRef.current.show('Completa todos los campos');
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show('Email incorrecto');
    } else if (formData.pass !== formData.rePass){
      toastRef.current.show('Las contraseñas no coinciden');
    } else if (size(formData.pass) < 6 || size(formData) > 16) {
      toastRef.current.show('Longitud de contraseña no valido');
    } else {
      setRegistrandoUsuario(true);
      firebase.auth().createUserWithEmailAndPassword(formData.email, formData.pass)
        .then( () => {
          setRegistrandoUsuario(false);
          navigation.navigate('account')
        })
        .catch( () => {
          setRegistrandoUsuario(false);
          toastRef.current.show('El email ya esta en uso')
        })
    }
  }
  
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
        onPress={onSubmit}
      />
      <Loading isVisible={registrandoUsuario} text="Registrando usuario" />
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
