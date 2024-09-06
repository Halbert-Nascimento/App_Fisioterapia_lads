import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import button from '../../../assets/button.png';
import ModalStundets from './modalStundets';

import dataAlunos from  "../../../data/dataAlunosFisio.json"; // importa alunos do arquivo json


const StudentsCard = ({ nome, semestre, pacientes, onPress }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <View style={styles.cardText}>
        <Text style={styles.label}>Aluno</Text>
        <Text style={styles.value}>{nome}</Text>
        <Text style={styles.label2}>Pacientes</Text>
        <Text style={styles.value}>{pacientes}</Text>
      </View>
      <View style={styles.cardText}>
        <Text style={styles.label}>Semestre</Text>
        <Text style={styles.value}>{semestre}</Text>
      </View>
    </View>
    <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={onPress}>
      <Image source={button} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

const Students = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [students, setStudents] = useState([]);

  // useEffect(() => {
  //   setStudents(dataAlunos);  // Carrega os dados diretamente do JSON importado
  // }, []);

  const queryAllAlunos = async () =>{
    const url = 'http://189.6.22.122:12010/Fisioterapeuta';
    try{
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert("Erro", "Token não encontrado. Faça login novamente.");
        return;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if(response.ok){
        const data = await response.json();
        console.log(data);
        setStudents(data); // Atualiza o estado com os dados recebidos
      }else{
        const errorResponse = await response.json();
        console.error('Erro ao buscar alunos:', errorResponse);
        Alert.alert("Erro", "Falha ao carregar dados dos alunos.");
      }

    }catch(error){
      console.error('Erro na requisição:', error);
      Alert.alert("Erro", "Ocorreu um erro na requisição. Tente novamente.");
    }
  };

  useEffect(() =>{
    queryAllAlunos();
  }, []);
 

  const handleButtonPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={students}
          renderItem={({ item }) => (
            <StudentsCard
              nome={item.nomeFisio}
              semestre={item.semestreFisio}
              pacientes={"Implementar"}
              onPress={handleButtonPress}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <ModalStundets modalVisible={modalVisible} closeModal={closeModal} />
    </>
  );
};

export default Students;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 0.2,
    borderColor: '#000',
    marginBottom: 20,
    flex: 1
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    padding: 15,
  },
  cardText: {
    marginRight: 20,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  label2: {
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10
  },
  value: {
    color: '#333',
  },
  button: {
    backgroundColor: '#00005D',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: '100%',
    borderWidth: 0.2,
    borderColor: '#000'
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
});
