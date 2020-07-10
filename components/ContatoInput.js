import React, { useState }  from 'react';
import { View, Text,StyleSheet, TextInput, Button, FlatList } from 'react-native';
import ContatoItem from '../components/ContatoItem';


const ContatoInput = (props) => {
 
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');


  const [contatos, setContatos] = useState ([]);
  const [contadorContatos, setContadorContatos] = useState(0);
  

  // Captura o nome do contato.

  const capturarNome = (nome) => {
    setNome(nome)

  };
  
  // Captura o número do contato. 

  const capturarNumero = (numero) => {
  setNumero(numero)
  };

  const adicionarContato = ( nome, numero ) => {
    var contato = nome + ":" + numero 
    setContatos(
        contatos => {
          setContadorContatos(contadorContatos + 1);
          return [{ key: contadorContatos.toString(), value: contato }, ...contatos];
         }
    )  
  }

 // Remove um contato da lista de contatos.

  const removerContato = (keyASerRemovida) => {
    setContatos(contatos => {
      return contatos.filter((contato) => {
          return contato.key !== keyASerRemovida
      })}
    )
  }
  
    return (
      <View style={styles.telaPrincipalView}>
      <View style={styles.contatoView}>
         <TextInput    
           placeholder="Insira o nome do contato..." style={styles.contatoInputText}
           value={nome} onChangeText={ (t) => capturarNome(t) }/>
         <TextInput placeholder="Insira o número de telefone..." style={styles.contatoInputText} 
           value={numero}  keyboardType='phone-pad' onChangeText={(t) => capturarNumero(t) } />
       
       <View style={styles.botao}>
         <Button color="#140385"  title="+" onPress={ () => adicionarContato(nome, numero) } />
       </View>
       </View>
     <View>
     <FlatList data={contatos} renderItem={
        contato => (
          <ContatoItem 
            chave={contato.item.key} 
            contato={contato.item.value}
            onDelete={removerContato} />
         )
       }
      />
     </View>
     </View>
);
}



const styles = StyleSheet.create({
    contatoInputText: {
      width: '80%',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      padding: 2,
      color: "#140385"
    },
    contatoView: {
      marginBottom: 8,
      alignItems: 'center'
      }, 
      botao: {
        width: '60%',
        marginTop: 8 
    },
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

    export default ContatoInput;