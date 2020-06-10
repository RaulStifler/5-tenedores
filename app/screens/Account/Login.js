import React, { useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-easy-toast'
import LoginForm from '../../components/Account/LoginForm';

const Login = () => {
  const navigation = useNavigation();
  const toastRef = useRef()
  return (
    <ScrollView>
      <Image
        source={ require('../../../assets/img/5-tenedores.png') }
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.formContainer}>
        <LoginForm toastRef={toastRef} />
        <Text style={styles.textRegister}>
          ¿Aún no tienes una cuenta?{" "}
          <Text
            style={styles.linkRegister}
            onPress={ () => navigation.navigate("register") }
          >
            Registrate
          </Text>
        </Text>
      </View>
      <Divider style={styles.divider} />
      <Text>Social Login</Text>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </ScrollView>
  )
}

export default Login;

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  formContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginRight: 10,
    marginRight: 10,
  },
  linkRegister: {
    color: "#00A680",
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: "#00A680",
    margin: 40,
  },
});
