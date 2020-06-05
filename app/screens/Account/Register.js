import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'

const Register = () => {
  return (
    <View>
      <Image
        source={ require("../../../assets/img/5-tenedores.png") }
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewForm}>
        <Text>Register form</Text>
      </View>
    </View>
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

