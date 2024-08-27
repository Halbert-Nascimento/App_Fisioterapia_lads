import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const setaIcon = require('./img/seta.png'); // Importe a imagem da seta
const cancelarIcon = require('./img/cancelar.png');
const xisIcon = require('./img/xis.png');

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          {/* Substitua a seta pelo componente Image */}
          <Image source={setaIcon} style={styles.setaImage} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Meus Agendamentos</Text>
      </View>
      <View style={styles.contentContainer}>
        <Image source={cancelarIcon} style={styles.image} />
        <Text style={styles.cancelText}>Formulário de solicitação de cancelamento:</Text>
        <View style={styles.textBoxContainer}>
          <TextInput
            style={styles.textBox}
            placeholder="Motivo do cancelamento:"
            placeholderItalic={true}
            multiline={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.redButton}>
            <Text style={styles.redButtonText}>Solicitar cancelamento</Text>
            <Image source={xisIcon} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      height: 80,
      backgroundColor: '#00005D',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    backButton: {
      position: 'absolute',
      left: 15,
    },
    headerText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 35,
    },
    image: {
      width: 80,
      height: 80,
    },
    cancelText: {
      fontSize: 20,
      color: '#202020',
      marginLeft: 40,
      marginRight: 40,
      textAlign: 'left',
      marginTop: 30,
      fontWeight: 'bold',
    },
    textBoxContainer: {
      width: '80%',
      borderWidth: 1,
      borderColor: 'gray',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginTop: 30,
      padding: 10,
    },
    textBox: {
      fontStyle: 'italic',
      marginBottom: 200,
    },
    buttonContainer: {
      marginTop: 20,
    },
    redButton: {
      marginTop: -21,
      height: 50,
      width: '80%',
      backgroundColor: '#9B2022',
      borderBottomEndRadius: 10,
      borderBottomLeftRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    redButtonText: {
      color: 'white',
      fontWeight: 'bold', 
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    closeIcon: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
});
