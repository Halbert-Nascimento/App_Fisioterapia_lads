import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const ModalAgendamentoCoord = ({ modalVisible, closeModal }) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}
    >
      <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPress={closeModal}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>Detalhes do Paciente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>Abrir Relatorio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>Ficha de Evolução</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>Primeira Consulta/Prontuario</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalAgendamentoCoord;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 370,
    height: 360,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalButton: {
    width: '100%',
    height: 60,
    padding: 15,
    backgroundColor: '#00005D',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});