import React from 'react';
import { Image, Text, View } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';


const Lista = ({item}) => {

  return (
    <View style={estiloLista.areaItens}>

      <LinearGradient colors={['#14417b', '#92afd7', '#92afd7']}>
        <Text style={estiloLista.itemTitulo}>{item.titulo}</Text>
      </LinearGradient>

      <Text style={estiloLista.itemSubtitulo}>{item.autor} ({item.anoPublicacao})</Text>

      <LinearGradient colors={['#14417b', '#92afd7', '#92afd7']}>
        <Image source={{uri: item.foto}} style={estiloLista.itemFoto} resizeMode="contain" />
      </LinearGradient>

    </View>
  );
}

export default Lista;