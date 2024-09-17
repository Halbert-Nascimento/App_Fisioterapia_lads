import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, Alert } from "react-native";
import { styles } from "../../styles/styleCadastroLogin";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function CadastroCoordenador() {
    const navigation = useNavigation();

    // estados para capturar os dados do formulario
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
   
    //função para criar a conta do coordenador
    async function criarContaCoordenador() {
      if(senha !== confirmaSenha){
        Alert.alert("Error", "As senha não coincidem. ")
        return;
      }

      const url = 'http://189.6.22.122:12010/Coordenador'; //rota
      const dados = {
        "idCoordenador": 0,
        "nomeCoordenador": nome,
        "emailCoordenador": email,
        "password": senha,
        "tipoUsuario": 2
      };

      try{
        //recuperar token jwt
        const token = await AsyncStorage.getItem('token');
        if(!token){
          Alert.alert("Error","Token não encontrador. Faça login novamente! ");
          return;
        }
        const response = await fetch(url,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // adicionando o token no header
          },
          body: JSON.stringify(dados)
        });
        if(response.ok){
          const jsonResponse = await response.json();
          console.log('Coordenador criado com sucesso!', jsonResponse);
          Alert.alert("Sucesso", "Conta do coordenador criado com sucesso.");
          navigation.navigate('login');
        }else{
          const errorResponse = await response.json();
          console.log('Error ao criar conta Coordenador:', errorResponse);
          Alert.alert("Error", "Falha ao criar conta. Verificar os dados.");
        }        
      }
      
      catch(error){
        console.log('Error na requisição:', error);
        Alert.alert("Error", "Ocorreu um error na requisição. tente novamente.");      
      }      
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.scrollContainer}>
                              
                <Image source={require('../../../assets/imagensPaciente/Logo_iesgo.png')} style={styles.image} />
                <Text style={styles.textLogin}>Criar conta coordenador</Text>
                
                <View style={styles.input}>
                    <TextInput style={styles.textInput} 
                      placeholder='Nome completo: '
                      value={nome}
                      onChangeText={setNome}
                    
                    />

                    <TextInput style={styles.textInput} 
                      placeholder='Email: email@email.com' 
                      value={email}
                      onChangeText={setEmail}  
                    />

                    <TextInput style={styles.textInput} 
                      placeholder='Password: ***************' 
                      secureTextEntry={true} 
                      value={senha}
                      onChangeText={setSenha}
                    />

                    <TextInput style={styles.textInput} 
                      placeholder='Confirm password: ***************' 
                      secureTextEntry={true} 
                      value={confirmaSenha}
                      onChangeText={setConfirmaSenha}
                    />
                    
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={criarContaCoordenador}>
                    <Text style={styles.loginButtonText}>Criar Conta</Text>
                </TouchableOpacity>

                
            </ScrollView>
        </View>
    );
}
