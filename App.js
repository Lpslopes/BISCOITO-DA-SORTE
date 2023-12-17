import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';




function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState(' ');

  let frase = [
    'Três regras: não prometa nada quando estiver feliz; não responda nada quando estiver irritado; não decida nada quando estiver triste.',
    'Não lamente o que podia ter e se perdeu por caminhos errados e nunca mais voltou.',
    'A vida só pode ser compreendida olhando-se para trás, mas só pode ser vivida olhando-se para a frente.',
    'Quando a vida te decepciona, qual é a solução? Simplesmente continue a nadar.',
    'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!',
    'O número dos que nos invejam confirma as nossas capacidades.',
    'É melhor conquistar a si mesmo do que vencer mil batalhas.',
    'A minha vontade é forte, porém minha disposição de obedecer-lhe é fraca.',
  ]


  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frase.length )
    setTextoFrase(' "' + frase[numeroAleatorio] + '" ');
    setImg(require('./src/biscoitoAberto.png'))
  }

  function reiniciar(){
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }


  return(
    <View style={styles.container}>
      <Image
      source={img}
      style={styles.img}
      />

      <Text style={styles.texto}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212' }]} onPress={ reiniciar }>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: '#121212'}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
img:{
  width: 230,
  height: 230,
},
texto:{
  fontSize: 20,
  color: '#dd7b22',
  margin: 30,
  fontStyle: 'italic',
  textAlign: 'center',
},
botao:{
  width: 230,
  height: 50,
  borderColor: '#dd7b22',
  borderWidth: 2,
  borderRadius: 25,
},
btnArea: {
  flex: 1,
  justifyContent:'center',
  alignItems: 'center'
},
btnTexto:{
  fontSize: 17,
  fontWeight: 'bold',
  color: '#dd7b22'
}

})


export default App;