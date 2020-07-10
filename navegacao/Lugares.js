import { createStackNavigator } from 'react-navigation-stack';
import ContatoInput from '../components/ContatoInput';
import telaInicial from '../Telas/telaInicial';
import { createAppContainer } from 'react-navigation';


const LugaresNavigator = createStackNavigator({
    telaInicial: telaInicial,
    Contatos: ContatoInput
});

export default createAppContainer(LugaresNavigator);