import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Alert} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalAgendamentoCoord from './modalAgendamentoCoord';
import button from '../../../assets/button.png';
import iconPendente from '../../../assets/pendente.png';
import iconCancelado from '../../../assets/cancelado.png';
import CancelModal from './cancelModal';

import { styles } from '../../styles/styleAgendamentos'; //importação dos estilos


// const students = [
//   { pacientes: 'Junio', dataConsulta: '00/00/00', fisioetapeuta: 'Cleiton', status: 'cancelado' },
//   { pacientes: 'Maria', dataConsulta: '00/00/00', fisioetapeuta: 'Cleiton', status: 'pendente' },
//   { pacientes: 'Pedro', dataConsulta: '00/00/00', fisioetapeuta: 'Cleiton', status: 'aceito' },
// ];

const StudentsCard = ({ pacientes, dataConsulta, fisioetapeuta, status, onPress }) => {
  let cardColor, iconSource;

  switch (status) {
    case 'cancelado':
      cardColor = '#9b2022';
      iconSource = iconCancelado;
      break;
    case 'pendente':
      cardColor = '#E2C83b';
      iconSource = iconPendente;
      break;
    case 'aceito':
      cardColor = '#00005d';
      iconSource = button;
      break;
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.cardText}>
          <Text style={styles.label}>Paciente</Text>
          <Text style={styles.value}>{pacientes}</Text>
          <Text style={styles.label2}>Data da Consulta</Text>
          <Text style={styles.value}>{dataConsulta}</Text>
        </View>
        <View style={styles.cardText}>
          <Text style={styles.label}>Fisioetapeuta</Text>
          <Text style={styles.value}>{fisioetapeuta}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.button, { backgroundColor: cardColor }]}
        onPress={() => onPress(status)}
      >
        <Image source={iconSource} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const Agendamentos = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [pacientes, setPaciente] = useState([]);

  const queryAllPacientes = async ()=>{
    const url = 'http://189.6.22.122:12010/Paciente';
    // const url = 'http://189.6.22.122:8081/agendamentos';
    try{
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert("Erro", "Token não encontrado. Faça login novamente.");
        return;
      }

      const response = await fetch(url,{
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if(response.ok){
        const data = await response.json();
        console.log(data);
        setPaciente(data);
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

  useEffect(() => {
    queryAllPacientes();
  }, []);
  

  const handleButtonPress = (status) => {
    setSelectedStatus(status);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={pacientes}
          renderItem={({ item }) => (
            <StudentsCard
              pacientes={item.nomePaciente}
              dataConsulta={item.dataConsulta}
              fisioetapeuta={item.fisioetapeuta}
              status={item.status}
              onPress={handleButtonPress}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {selectedStatus === 'cancelado' ? (
        <CancelModal modalVisible={modalVisible} closeModal={closeModal} />
      ) : (
        <ModalAgendamentoCoord modalVisible={modalVisible} closeModal={closeModal} />
      )}
    </>
  );
};

export default Agendamentos;
