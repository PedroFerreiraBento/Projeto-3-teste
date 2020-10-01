import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Lista from '../../components/Lista/Lista';
import estiloColecao from './estiloColecao';
import { MaterialIcons } from '@expo/vector-icons'

function Colecao({ navigation, route }) {

    const [colecao, setColecao] = useState([
        {
            id: '1',
            titulo: 'A revolução dos bichos: Um conto de fadas',
            descricao: 'Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos.',
            autor: 'George Orwell',
            anoPublicacao: '1945',
            foto: 'https://images-na.ssl-images-amazon.com/images/I/51Qd+WSmRFL._SX321_BO1,204,203,200_.jpg'
        },
        {
            id: '2',
            titulo: 'A Arte de Enganar: Ataques de Hackers',
            descricao: 'Todos os firewalls e protocolos de criptografia do mundo nunca serão suficientes para deter um hacker decidido a atacar um banco de dados corporativo ou um empregado revoltado determinado a paralisar um sistema. Neste livro, Mitnick fornece cenários realistas de conspirações, falcatruas e ataques de engenharia social aos negócios...',
            autor: 'Kevin D. Mitnick',
            anoPublicacao: '2003',
            foto: 'https://images-na.ssl-images-amazon.com/images/I/414SJP4uGPL._SX350_BO1,204,203,200_.jpg'
        },
        {
            id: '3',
            titulo: 'Código Limpo: Habilidades Práticas do Agile',
            descricao: 'Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.',
            autor: 'Robert C. Martin',
            anoPublicacao: '2009',
            foto: 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg'
        },
        {
            id: '4',
            titulo: 'Galinha Pintadinha - Meus primeiros números',
            descricao: 'Do 1 até o 10 vamos contar, e com a turma da Galinha Pintadinha você vai se divertir e brincar! Aprenda a escrever os números de uma forma fácil e divertida!',
            autor: 'Ciranda Cultural',
            anoPublicacao: '2016',
            foto: 'https://images-na.ssl-images-amazon.com/images/I/51inZPaCd8L._SX497_BO1,204,203,200_.jpg'
        }
    ])

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloColecao.container}>

            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Coleção</Text>
                <MaterialIcons name="add" size={24} color="#fff" />
            </View>

            <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={colecao}
                renderItem={ ({item}) => <Lista item={item}/> }
            />

        </View>
    )
}

export default Colecao;
