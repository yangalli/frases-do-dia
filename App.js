import React from 'react';
import { AppRegistry, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

const Estilos = {

  principal: {
    backgroundColor: 'white',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },

  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }

};

const gerarNovaFrase = () => {

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 7);

  var frases = Array();
  frases[0] = 'Tente mover o mundo - o primeiro passo será mover a si mesmo.';
  frases[1] = 'Justiça é livremente aceitar o que naturalmente sucede.';
  frases[2] = 'O belo é aquilo que é útil!';
  frases[3] = 'O bom é tudo aquilo que une!';
  frases[4] = 'A justiça é dar a cada um o que lhe é de sua própria natureza.';
  frases[5] = 'O melhor modo de vingar-se de um inimigo, é não se assemelhar a ele.';
  frases[6] = 'O egoísmo pessoal é que excita e estimula o homem a abusar de seus conhecimentos e poderes. O egoísmo é um edifício humano, cujas janelas e portas estão sempre escancaradas para que toda espécie de iniqüidades entre na alma humana.'


  var fraseEscolhida = frases[ numeroAleatorio ];

  Alert.alert(fraseEscolhida);

}

export default class App extends React.Component {
  render() {
    const { principal, botao, textoBotao } = Estilos;
    return (
      <View style={principal}>

      <Image source={ require('./assets/logo.png') } />

        <TouchableOpacity style={botao} onPress={gerarNovaFrase }>
        <Text style={ textoBotao }>Nova Frase</Text>
      </TouchableOpacity>

      </View>
    );
  }
}

AppRegistry.registerComponent('app-inicial-udemy', () => App);