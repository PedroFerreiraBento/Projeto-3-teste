import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const estiloColecao = StyleSheet.create({
   container: {   
      flex: 1,
      backgroundColor: '#14417b',
      paddingTop: Constants.statusBarHeight    
   },
   header: {
      height: 40,
      backgroundColor: '#14417b',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-between",
      padding: 5
   },
   texto: {
      fontSize: 18,
      color: '#FFFFFF',
   },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 40,
      borderWidth: 2,
      borderColor: '#e8f2e9',
      backgroundColor: '#14417b',
      justifyContent: 'center',
      alignItems: 'center',
   },
      botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
});

  export default estiloColecao;