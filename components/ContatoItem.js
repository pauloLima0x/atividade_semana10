import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const ContatoItem = (props) => {
    
    return (
        <TouchableOpacity onLongPress={() => props.onDelete(props.chave)}>
            <View style={estilos.itemNaLista}>
                <Text style={estilos.textColor}>{props.contato}</Text>              
            </View>
      </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    itemNaLista: {
        padding: 16,
        backgroundColor: '#140385',
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 12,
        fontSize: 16,
        width: '80%',
        alignSelf: 'center'
    },
    textColor: {
        color: '#fff'
    }
});

export default ContatoItem;