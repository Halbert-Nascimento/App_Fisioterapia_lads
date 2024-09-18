import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Modal, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import decodeJWT from '../../utils/jwtDecode';

import { styles } from '../../styles/styleMeusAgendamentos';


import { useNavigation } from '@react-navigation/native';

export default function MeusAgendamentos() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [agendamentos, setAgendamentos] = useState([]);

   // estado para armazenar dados do usuario a partir do token
   const [nome, setNome] = useState(); // Estado para armazenar o nome do usuário
   const [id, setID] = useState(); // Estado para armazenar o nome do usuário

   useEffect(() => {
       async function fetchToken() {
         try {
           const token = await AsyncStorage.getItem('token'); // Aguarda o token
           if (token) {
               const decodedToken = decodeJWT(token); // Decodifica o token
               setNome(decodedToken.Nome); // Atualiza o estado com o nome
               setID(decodedToken.Id); // Atualiza o estado com o nome
           } else {
             console.log("Token não encontrado.");
           }
         } catch (error) {
           console.log("Erro ao buscar o token:", error);
         }
       }
   
       fetchToken(); // Chama a função quando o componente é montado
     }, []);

     useEffect(() => {
      if (id) {
        queryAgendamentos();
      }
    }, [id]);

  const queryAgendamentos = async ()=>{ 
    console.debug('Buscando agendamentos do paciente:', id);

    const url = "http://189.6.22.122:12012/agendamentos/paciente/"+id;
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
        console.debug(data);
        setAgendamentos(data);
      }else{
        const errorResponse = await response.json();
        console.error('Erro ao buscar agendamentos:', errorResponse);
        Alert.alert("Erro", "Falha ao carregar dados do paciente.");
      }
    }catch(error){
      console.error('Erro na requisição:', error);
      Alert.alert("Erro", "Ocorreu um erro na requisição. Tente novamente.");
    }
  };

  

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
        <Text>{item.id}</Text>
        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Data Da Consulta</Text>
        <Text>{item.date == null ? item.status: item.date}</Text>
      </View>
      <View style={[styles.cardActions, { backgroundColor: item.status =='Pendente' ? '#E2C83b' : '#0000FF' }]}>
        <TouchableOpacity style={styles.cardButton} onPress={() => !item.locked && openModal(item)}>
          <Image
            style={styles.cardButtonIcon}
            source={
              item.status
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
        data={agendamentos}
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
              {selectedAppointment.status ? (
                <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate("Cancelar Agendamento")}>
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
