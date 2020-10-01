import { StyleSheet } from 'react-native';
import Contants from 'expo-constants'

const estiloInicial = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
      paddingTop: Contants.statusBarHeight,
      backgroundColor: '#081a31',
   },
   header: {
      height: 40,
      width: '100%',
      backgroundColor: '#081a31',
      flexDirection: 'row',
      alignItems: 'flex-end',
   },
   fundo: {   
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      height: '100%',
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   botaoBackground: {
      width: 140,
      height: 100,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: '#14417b'
   },
   botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
});

  export default estiloInicial;