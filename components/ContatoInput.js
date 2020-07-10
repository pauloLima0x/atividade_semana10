import React, { useState }  from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';



const ContatoInput = (props) => {
 
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');

  
  // Captura o nome do contato.

  const capturarNome = (nome) => {
    setNome(nome)

  };
  
  // Captura o número do contato. 

  const capturarNumero = (numero) => {
  setNumero(numero)
  };


    return (

      <View style={styles.contatoView}>
        <View >
         <TextInput  
           placeholder="Insira o nome do contato..." style={styles.contatoInputText}
           value={nome} onChangeText={ (t) => capturarNome(t) }/>
         <TextInput placeholder="Insira o número de telefone..." style={styles.contatoInputText} 
           value={numero}  keyboardType='phone-pad' onChangeText={(t) => capturarNumero(t) } />
       </View>
       <View style={styles.botao}>
         <Button color="#140385"  title="+" onPress={ () => props.onAdicionarContato(nome, numero) } />
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
        width: '80%',
        marginTop: 8, 
    }
  
    
    });

    export default ContatoInput;