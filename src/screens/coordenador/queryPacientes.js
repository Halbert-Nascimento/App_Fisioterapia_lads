import React, { useState, useEffect  } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Button } from 'react-native';
import ModalAgendamentoCoord from './pacienteModalAgendamentoCoord';
import button from '../../../assets/button.png';
import iconPendente from '../../../assets/pendente.png';
import iconCancelado from '../../../assets/cancelado.png';
import CancelModal from './pacienteCancelModal';



// const RelatorioPaciente = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button onPress={() => navigation.goBack()} title="Voltar para Home" />
//     </View>
//   );
// };

// export default RelatorioPaciente;

// buscar dados dos pacientes em um arquivo json simulando o backend
import pacientesData from "../../../data/dataPacientesAll.json"; //alterar para url



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
  };

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

const RelatorioPacientes = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  //buscando dados do arquivo json *******
  const [pacientes, setPacientes] = useState([]);
  useEffect(() => {
    // Carrega os dados do JSON quando o componente é montado
    setPacientes(pacientesData); 
  }, []);
  //************** */

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
              pacientes={item.pacientes}
              dataConsulta={item.dataConsulta}
              fisioetapeuta={item.fisioterapeuta}
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

export default RelatorioPacientes;

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
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 0.2,
    borderColor: '#000',
    marginBottom: 20,
    flex: 1,
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
    marginTop: 10,
  },
  value: {
    color: '#333',
  },
  button: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: '100%',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
});
