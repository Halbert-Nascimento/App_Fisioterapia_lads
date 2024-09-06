import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../../styles/styleCadastroLogin";
import { tokens } from "react-native-paper";

export default function Login() {
  const navigation = useNavigation();

  //Criando o estado para armazenar email e senha
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  //Função para realizar o login e salvar o token jwt
  async function handleLogin(){
    const url = 'http://189.6.22.122:12010/Auth/login'; //url login api gean
    const dados = {
      "idUser": 0,
      "username": email,
      "password": senha,
      "tipoUsuario": 1
    };

    try{
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(dados)
      });

      if(response.ok){
        const jsonResponse = await response.json();
        
        //salvando o token jwt no AsyncStorege
        await AsyncStorage.setItem('token', jsonResponse.token);

        console.log("Login realizado com sucesso", jsonResponse); // para debug remover
        Alert.alert("Login", "Login realizado com sucesso!"); // debug remover
        Alert.alert('Token JWT', jsonResponse.token); //debug remover

        //redirecionamento para outra tela (modificar posteriomente e fazer logica para redirecionar automaticamente para tela de acordo com o perfil 
        // do logado, paciente aluno/fiso. coodenador)
        navigation.navigate('Juncao');
      }else{
        const errorResponse = await response.json();
        console.log("Error ao realizar login: ", errorResponse);
        Alert.alert("Error", "Falha no login, verifique suas credenciais. ");
      }

    } catch(error){
      console.error('error na requisição: ', error);
      Alert.alert("Error", "Ocorreu um error na requisição. Tente novamente. ")

    }
  }
  
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/imagensPaciente/Logo_iesgo.png')} style={styles.image} />
      <Text style={styles.textLogin}>Login To Your Account</Text>
      
      <View style={styles.input}>
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
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.viewsign}>
        <Text style={styles.textsignup}>Don't have an account? </Text> 
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={[styles.textsignup, { color: '#00005D', fontSize: 14 }]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
