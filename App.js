import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
 
const [ligada, setLigada] = useState(true);

function  ligar() {
  setLigada(true);
}

function desligar() {
  setLigada(false);
}


  return (
    <View style={[styles.container, {backgroundColor: ligada ? '#fff176' : '#2c3e50'}]}>
      <Text style={[styles.mensagem, {color: ligada ? '#000' : '#fff'}]}>
        {ligada ? 'A lâmpada está LIGADA 💡' : 'A lâmpada está DESLIGADA 🌑'}
      </Text>
      <TouchableOpacity style={styles.botao} onPress={ligada? desligar : ligar}>
        <Text style={styles.texoBotao}>
          {ligada ? 'Apagar' : 'Acender'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  mensagem: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold'
  },

  botao:{
    backgroundColor: '#2196f3',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20
  },

  texoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
