import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Contact() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Dados da Empresa</Text>
    <View style={styles.modalDados}>
      <Text style={styles.text2}>Telefone: (34) 9 9999-9999</Text>
      <Text style={styles.text2}>Endereço: Rua Mica Pinheiro Nº 113</Text>
      <Text style={styles.text2}>Email: navigation@gmail.com</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5DEB3'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFA500'
  }
})