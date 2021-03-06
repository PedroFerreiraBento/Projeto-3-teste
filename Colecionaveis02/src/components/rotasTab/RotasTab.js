import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Perfil from '../../views/Perfil/Perfil';
import Colecao from '../../views/Colecao/Colecao';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const icones = {
  Inicial: { name: 'home' },
  Colecao: { name: 'storage' },
  Perfil: { name: 'person' },
}

const RotasTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        labelStyle: { fontSize: 24 },
        style: {backgroundColor: '#14417b'},
        activeTintColor: '#FFFFFF' 
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const { name } = icones[route.name]
          return <MaterialIcons name={name} size={size} color={color} />
        }
      })}
    >
      <Tab.Screen 
        name="Inicial" 
        component={RotasDrawer}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen 
        name="Colecao" 
        component={Colecao}
      />
      <Tab.Screen 
        name="Perfil" 
        component={Perfil}
      />
    </Tab.Navigator>
  );
}

export default RotasTab;