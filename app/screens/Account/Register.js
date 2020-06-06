import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import RegisterForm from '../../components/Account/RegisterForm'

const Register = () => {
  return (
    <ScrollView>
      <Image
        source={ require("../../../assets/img/5-tenedores.png") }
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewForm}>
        <RegisterForm />
      </View>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
    
  },
})

