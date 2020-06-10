import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { isEmpty } from 'lodash';
import { useNavigation } from '@react-navigation/native';
import { validateEmail } from '../../utils/validations';
import * as firebase from 'firebase';
import Loading from '../Loading';

const LoginForm = ({
  toastRef,
}) => {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({email: "", pass: ""});

  const navigation = useNavigation();

  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text})
  }
  
  const onSubmit = () => {
    if (isEmpty(formData.email) || isEmpty(formData.pass)) {
      toastRef.current.show('Completa todos los campos');
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show('Formato de email incorrecto');
    } else {
      setLoading(true);
      firebase.auth().signInWithEmailAndPassword(formData.email, formData.pass)
        .then(() => {
          setLoading(false);
          navigation.navigate('account');
        })
        .catch(() => {
          setLoading(false);
          toastRef.current.show('Error al iniciar sesión');
        })
    }
  }
  
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.icon}
          />
        }
        onChange={(e) => onChange(e, 'email')}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon
            type="material-community"
            name={ showPass ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={ () => setShowPass(!showPass)}
          />
        }
        secureTextEntry={!showPass}
        onChange={(e) => onChange(e, 'pass')}
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={onSubmit}
      />
      <Loading
        text="Iniciando sesión"
        isVisible={loading}
      />
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  inputForm: {
    width: '100%',
    marginTop: 20,
  },
  btnContainer: {
    marginTop: 20,
    width: '95%',
  },
  btn: {
    backgroundColor: '#00A680',
  },
  icon: {
    color: '#C1C1C1'
  }
})
