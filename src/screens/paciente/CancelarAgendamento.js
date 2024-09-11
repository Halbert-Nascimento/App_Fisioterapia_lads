import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const setaIcon = require('../../../assets/imagensPaciente/seta.png'); // Importe a imagem da seta
const cancelarIcon = require('../../../assets/imagensPaciente/cancelar.png');
const xisIcon = require('../../../assets/imagensPaciente/xis.png');

export default function CancelarAgendamento() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
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
    fontSize: 25,
    color: '#202020',
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'left',
    marginTop: 30,
    fontWeight: 'bold',
  },
  textBoxContainer: {
    width: '80%',
    height: 500,
    borderWidth: 1,
    borderColor: 'gray',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 30,
    padding: 10,
  },
  textBox: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 200,
  },
  buttonContainer: {
    //marginTop: 20,
  },
  redButton: {
    height: 70,
    width: '80%',
    backgroundColor: '#9B2022',
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center', 
    alignItems: 'center',     
    flexDirection: 'row',     
    paddingHorizontal: 20,    
    shadowColor: '#000',            
    shadowOffset: { width: 0, height: 4 },  
    shadowOpacity: 0.1,             
    shadowRadius: 5,               
    elevation: 5,                  
  },
  redButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,                  
    textAlign: 'center',      
  },
  closeIcon: {
    width: 25,                
    height: 25,               
    marginLeft: 5,           
  },
});
