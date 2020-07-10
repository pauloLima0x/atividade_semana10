import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../components/BotaoCabecalho';

 


  
  
  const ListaDeContatos = (props) => { 
  
    return (
  
  

    <View>
       <Text> Clique no botão + para adicionar contatos </Text>
  </View>
       
);
}

ListaDeContatos.navigationOptions = dadosNav => {
    return {
        headerTitle: 'Lista de contatos',
        headerRight:
            <HeaderButtons
                HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate('Contatos') }} />
       
            </HeaderButtons>
    }
}


  const styles = StyleSheet.create({
    telaPrincipalView: {
    padding: 50
    }

    });

   export default ListaDeContatos;