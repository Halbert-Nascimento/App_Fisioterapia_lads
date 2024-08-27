import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Modal } from 'react-native';

import { styles } from '../../styles/styleMeusAgendamentos';


import { useNavigation } from '@react-navigation/native';

export default function MeusAgendamentos() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const openModal = (appointment) => {
    setSelectedAppointment(appointment);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedAppointment(null);
  };

  const renderAppointment = ({ item }) => (
    <View style={styles.appointmentCard}>
      <View style={styles.cardContent}>
        <Text>Fisioterapeuta</Text>
        <Text>{item.therapist}</Text>
        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Data Da Consulta</Text>
        <Text>{item.date}</Text>
      </View>
      <View style={[styles.cardActions, { backgroundColor: item.locked ? '#FF0000' : '#0000FF' }]}>
        <TouchableOpacity style={styles.cardButton} onPress={() => !item.locked && openModal(item)}>
          <Image
            style={styles.cardButtonIcon}
            source={
              item.locked
                ? require('../../../assets/imagensPaciente/logo_cadeado.png')  // Ícone para "locked"
                : require('../../../assets/imagensPaciente/logo_acesso.png')  // Ícone para "edit"
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* no cabeçalho do menu ja tem o titulo da tela */}
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Meus Agendamentos</Text>
      </View> */}
      <FlatList
        data={[
          { id: '1', therapist: 'Junio da fisio', date: '00/00/00', locked: true },
          { id: '2', therapist: 'Junio da fisio', date: '00/00/00', locked: false },
          { id: '3', therapist: 'Junio da fisio', date: '00/00/00', locked: false },
          { id: '4', therapist: 'Junio da fisio', date: '00/00/00', locked: true },
          { id: '5', therapist: 'Junio da fisio', date: '00/00/00', locked: true },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={renderAppointment}
      />
      {selectedAppointment && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {selectedAppointment.locked ? (
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>Cancelar Agendamento</Text>
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => navigation.navigate('VisualizarRelatorio')}
                  >
                    <Text style={styles.modalButtonText}>Visualizar Relatório</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => navigation.navigate('CancelarAgendamento')}
                  >
                    <Text style={styles.modalButtonText}>Cancelar Agendamento</Text>
                  </TouchableOpacity>
                </>
              )}
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}
