import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import button from '../../../assets/button.png';
import ModalStundets from './modalStundets';

const students = [
  { nome: 'Junio', semestre: '5º', pacientes: 5 },
  { nome: 'Maria', semestre: '4º', pacientes: 3 },
  { nome: 'Pedro', semestre: '6º', pacientes: 4 },
  { nome: 'Junio', semestre: '5º', pacientes: 5 },
  { nome: 'Maria', semestre: '4º', pacientes: 3 },
  { nome: 'Pedro', semestre: '6º', pacientes: 4 },
  { nome: 'Junio', semestre: '5º', pacientes: 5 },
  { nome: 'Maria', semestre: '4º', pacientes: 3 },
  { nome: 'Pedro', semestre: '6º', pacientes: 4 },
];

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
              nome={item.nome}
              semestre={item.semestre}
              pacientes={item.pacientes}
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
