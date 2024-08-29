import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import ModalAgendamentoCoord from './ModalAgendamentoCoord';
import button from '../../../assets/button.png';
import iconPendente from '../../../assets/pendente.png';
import iconCancelado from '../../../assets/cancelado.png';
import CancelModal from './cancelModal';

import { styles } from '../../styles/styleAgendamentos'; //importação dos estilos

const students = [
  { pacientes: 'Junio', dataConsulta: '00/00/00', fisioetapeuta: 'Cleiton', status: 'cancelado' },
  { pacientes: 'Maria', dataConsulta: '00/00/00', fisioetapeuta: 'Cleiton', status: 'pendente' },
  { pacientes: 'Pedro', dataConsulta: '00/00/00', fisioetapeuta: 'Cleiton', status: 'aceito' },
];

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
          data={students}
          renderItem={({ item }) => (
            <StudentsCard
              pacientes={item.pacientes}
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
