import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import estiloRotasDrawer from './estiloRotasDrawer'
import { Image, Text, View } from 'react-native';


const DrawerPersonalizado = (props) => {
  return (
    <DrawerContentScrollView {...props}>

      <View style={estiloRotasDrawer.fotoContainer}>
        <Image source={{uri: 'https://github.com/ribas187.png'}} style={estiloRotasDrawer.foto} />
        <Text style={estiloRotasDrawer.nome}>Administrador</Text>
      </View>

      <DrawerItemList {...props}/>

    </DrawerContentScrollView>
  );
}

export default DrawerPersonalizado;