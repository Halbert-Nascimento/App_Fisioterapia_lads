import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { CheckBox } from '@rneui/themed';
import { TextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.headerButton} onPress={() =>  navigation.navigate('HomeScreen')}>
        <Image style={styles.headerImage} source={require('../../../assets/imagensFisioterapeuta/Voltar.png')} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Relatório</Text>
    </View>
  );
};

export default function RelatorioEvolucao() {
  const navigation = useNavigation();
  const [isFisioterapeutaChecked, setIsFisioterapeutaChecked] = useState(false);
  const [isCoordenadorChecked, setIsCoordenadorChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header /> */}
      <View style={styles.reportContainer}>
        <Text style={styles.dateText}>{new Date().toLocaleDateString()}</Text>
        <TextInput style={styles.inputBox} placeholder="Digite seu relatório aqui" multiline />
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isFisioterapeutaChecked}
            onValueChange={setIsFisioterapeutaChecked}
          />
          <Text style={styles.checkboxLabel}>Assinatura do Fisioterapeuta</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isCoordenadorChecked}
            onValueChange={setIsCoordenadorChecked}
          />
          <Text style={styles.checkboxLabel}>Assinatura do Coordenador</Text>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={() => alert('Relatório enviado!')}>
          <Text style={styles.submitButtonText}>Enviar Relatório</Text>
          <Image style={styles.submitImage} source={require('../../../assets/imagensFisioterapeuta/send.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: '#081478',
    padding: 20,
    paddingVertical: 30,
    marginTop: -10,
    width: 410,
    marginLeft: -10,
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 140,
  },
  headerButton: {
    padding: 10,
  },
  headerImage: {
    width: 20,
    height: 30,
    marginTop: 10,
    marginLeft: 10,
  },
  reportContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 120,
    marginLeft: 20,
    width: 380,
    height: 620,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  dateText: {
    fontSize: 18,
    marginBottom: 10,
    height: 50,
    marginTop: -110,
  },
  inputBox: {
    height: 290,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginBottom: 0,
    alignItems: 'baseline',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -10,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#081478',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginLeft: -10,
    marginRight: -10,
    marginBottom: -130,
    alignItems: 'center',
    marginTop: 25,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  submitImage:{
    width: 20,
    height: 20,
    marginLeft: 250,
    marginTop: -20,
    marginBottom: 10,
  },
});