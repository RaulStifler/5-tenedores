import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';

const UserGuest = () => {
  const  navigation = useNavigation();
  return (
    <ScrollView centerContent style={styles.viewBody}>
      <Image
        style={styles.image}
        source={ require('../../../assets/img/original.jpg') }
        resizeMode="contain"
      />
      <Text style={styles.title}>Consulta tu perfil de 5 Tenedores</Text>
      <Text style={styles.description}>
        ¿Comó describirías tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado más y comenta como ha sido tu experiencia.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnVerPerfil}
          containerStyle={styles.btnContainer}
          title="Ver tu perfil"
          onPress={ () => navigation.navigate("login")}
        />
      </View>
    </ScrollView>
  )
};

export default UserGuest;

const styles = StyleSheet.create({
  viewBody: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  btnVerPerfil: {
    backgroundColor: "#00A680"
  },
  btnContainer: {
    width: "70%",
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  }
})
