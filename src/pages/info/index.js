import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

export default function Info() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre a Empresa</Text>
      <View style={styles.modalDados}>
        <Text style={styles.text2}>Começamos como um grupo de empreendedores jovens e nerds na esperança de construir uma empresa de tecnologia com fins lucrativos que pudesse ser um veículo para o bem. A Liferay Inc. foi formada por alguns engenheiros de software, uma mãe e um futuro advogado em um ambiente cercado por móveis doados por uma igreja local. Eles tinham um objetivo simples: criar tecnologia útil que beneficiasse clientes, parceiros e funcionários, e construir uma organização que ajudasse outras pessoas a alcançar seu máximo potencial.</Text>
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
    fontSize: 22,
    color: '#FFA500',
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#006400',
  },
  modalDados: {
  justifyContent: 'space-between',
  top: 15
  
  }
})