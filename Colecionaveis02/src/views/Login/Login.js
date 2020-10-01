import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import estiloLogin from './estiloLogin';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }
    
    return (
        <View style={estiloLogin.container}>
            <ImageBackground 
                source={require('../../../assets/imagens/matrix.jpg')} 
                style={estiloLogin.fundo} 
                imageStyle={{opacity: 0.3}}
            >

                <View style={estiloLogin.logoContainer}>
                    <LinearGradient colors={['#4c669f', '#192f6a', '#081a31']} style={estiloLogin.logo}>
                        <AntDesign name="rest" size={50} color="#fff" />
                    </LinearGradient>
                </View>

                <View style={estiloLogin.campoContainer}>
                    <MaterialIcons name="person" size={24} color="#fff" />
                    <TextInput
                        placeholderTextColor="#666"
                        style={estiloLogin.campo}
                        placeholder="Login"
                        onChangeText={login => setLogin(login)}
                        value={login}
                    />
                </View>

                <View style={estiloLogin.campoContainer}>
                    <MaterialIcons name="vpn-key" size={24} color="#fff" />
                    <TextInput
                        placeholderTextColor="#666"
                        style={estiloLogin.campo}
                        placeholder="Senha"
                        onChangeText={senha => setSenha(senha)}
                        value={senha}
                    />
                </View>

                <TouchableOpacity onPress={entrar}>
                    <LinearGradient colors={['#4c669f', '#192f6a', '#081a31']} style={estiloLogin.botaoLinearGradient}>
                        <MaterialIcons name="send" size={24} color="#fff" />
                        <Text style={estiloLogin.botaoTexto}>Entrar</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default Login;
