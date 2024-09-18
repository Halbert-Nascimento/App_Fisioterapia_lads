import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView , Alert} from 'react-native'; // Adicionando ScrollView
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import decodeJWT from '../../utils/jwtDecode';
// import { styles } from "../../styles/styleHomeGeral";

const pedidosIcon = require('../../../assets/imagensPaciente/pedidos.png');
const uploadIcon = require('../../../assets/imagensPaciente/upload.png');
const enviarIcon = require('../../../assets/imagensPaciente/enviar.png');
const setaIcon = require('../../../assets/imagensPaciente/seta.png');



export default function Atendimento() {
    const navigation = useNavigation();
    const [primeiraConsulta, setPrimeiraConsulta] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);// Estado para armazenar o arquivo selecionado
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

    //função para carregar o arquivo
    const pickDocument = async () => {
        try {
            const res = await DocumentPicker.getDocumentAsync({
                type: '*/*', // Seleciona qualquer tipo de arquivo
            });
            setSelectedFile(res); // Atualiza o estado com o arquivo selecionado
            console.log('Arquivo selecionado:', res); //debug
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // O usuário cancelou a seleção do arquivo
                console.log('Seleção de arquivo cancelada');
            } else {
                console.log('Erro ao selecionar o arquivo:', err);
            }
        }
    };

    //função para enviar o pedido médico para API
    const uploadFile = async () => {
        if (!selectedFile) {
            Alert.alert('Erro', 'Por favor, selecione o pedido médico primeiro');
            return;
        }

        const formData = new FormData(); // Cria um objeto FormData para o upload
        formData.append('pedido_medico', {
            uri: selectedFile.assets[0].uri,
            type: selectedFile.assets[0].mimeType,
            name: selectedFile.assets[0].name,
        });
        formData.append('idPaciente', id); 
        formData.append('primeira_consulta', primeiraConsulta === 'S' ? true : false);

        try {
            const token = await AsyncStorage.getItem('token');
            if(!token){
                Alert.alert("Error","Token não encontrador. Faça login novamente! ");
                return;
            }
            //trecho para debug
                console.log('URL:', 'http://189.6.22.122:8081/agendamentos');
                console.log('Token:', token);
                console.log('FormData:', formData);
            //fim do trecho para debug


            const response = await fetch('http://189.6.22.122:12012/agendamentos', { // Adicionar a rota da API
                method: 'POST',
                headers:{
                    'Authorization': `Bearer ${token}`, // adicionando o token no header
                    'Content-Type': 'multipart/form-data',
                  },
                body: formData,
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log('Pedido médico enviado com sucesso:', jsonResponse); //debug
                Alert.alert('Sucesso', 'Pedido médico enviado com sucesso');
            } else {
                const errorResponse = await response.json();
                console.error('Erro ao enviar o pedido médico:', errorResponse);
                Alert.alert('Erro', 'Falha ao enviar o pedido médico');
            }
        }catch (error) {
            console.error('Erro na requisição:', error);
            Alert.alert('Erro', 'Ocorreu um erro na requisição. Tente novamente');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                
                <View style={styles.imageContainer}>
                    <Image source={pedidosIcon} style={styles.image} />
                    <Text style={styles.text}>Enviar Pedido médico:</Text>

                    <View style={styles.bottomContainer}>
                        {/* butao de carregar documentos */}

                        <TouchableOpacity style={styles.button} onPress={pickDocument} >
                            <Text style={styles.buttonText}>Carregar Documentos:</Text>
                            <Image source={uploadIcon} style={styles.upload} />
                        </TouchableOpacity>

                        {selectedFile && selectedFile.assets && selectedFile.assets.length > 0 && (
                            <Text style={styles.selectedFileText}>Arquivo: {selectedFile.assets[0].name}</Text>
                        )} 

                        <View style={styles.booleanContainer}>
                            <Text style={styles.booleanText}>É sua primeira consulta?</Text>
                            <View style={styles.booleanOptions}>
                                <TouchableOpacity
                                    style={[styles.optionButton, primeiraConsulta === 'S' && styles.optionSelected]}
                                    onPress={() => setPrimeiraConsulta('S')}
                                >
                                    <Text style={[styles.optionText, primeiraConsulta === 'S' && styles.optionSelectedText]}>S</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.optionButton, primeiraConsulta === 'N' && styles.optionSelected]}
                                    onPress={() => setPrimeiraConsulta('N')}
                                >
                                    <Text style={[styles.optionText, primeiraConsulta === 'N' && styles.optionSelectedText]}>N</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity  style={styles.bottomButton} onPress={uploadFile}>
                        <View  style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text  style={{ color: 'white', fontSize: 16, marginRight: 5, fontWeight: 'bold' }}>Enviar</Text>
                            <Image source={enviarIcon} style={styles.enviar} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    backButton: {
        position: 'absolute',
        left: 15,
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 35,
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 20,
        color: '#202020',
        marginLeft: 40,
        marginRight: 'auto',
        textAlign: 'left',
        marginTop: 30,
        fontWeight: 'bold',
    },
    bottomContainer: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'gray',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 30,
        padding: 10,
        paddingBottom: 200,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: 'gray',
    },
    buttonText: {
        fontSize: 16,
        fontStyle: 'italic',
        marginLeft: 10,
    },
    upload: {
        width: 25,
        height: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    booleanContainer: {
        marginTop: 20,
    },
    booleanText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    booleanOptions: {
        flexDirection: 'row',
        marginTop: 10,
    },
    optionButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginRight: 10,
        backgroundColor: '#D3D3D3',
        borderWidth: 1,
        borderColor: 'gray',
    },
    optionText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    optionSelected: {
        backgroundColor: '#00005D',
    },
    optionSelectedText: {
        color: 'white',
    },
    bottomButton: {
        backgroundColor: '#00005D',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
        width: '80%',
        alignItems: 'center',
    },
    enviar: {
        marginRight: 0,
    }
});
