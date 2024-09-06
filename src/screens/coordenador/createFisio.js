import React, { useState } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity,Image, ScrollView , Alert} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateFisio() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [semestre, setSemestre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  


  const toggleSecureEntry = () => {
    setSecureTextEntry((prev) => !prev);
  };
  const toggleConfirmSecureEntry = () => {
    setConfirmSecureTextEntry((prev) => !prev);
  };

  const handleMatriculaChange = (text) => {
    // Verifica se o texto contém apenas números
    if (/^\d+$/.test(text) || text === "") {
      setMatricula(text);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError(!validateEmail(text));
  };

  const validatePasswords = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (confirmPassword !== "") {
      setPasswordError(!validatePasswords(text, confirmPassword));
    }
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setPasswordError(!validatePasswords(password, text));
  };


  async function cadastrarAluno() {
    if (!validateEmail(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }
    if (!validatePasswords(password, confirmPassword)) {
      alert("As senhas são diferentes.");
      return;
    }
    
    const url = 'http://189.6.22.122:12010/Fisioterapeuta';
    const dados = {
      "idFisio": 0,
      "nomeFisio": nome,
      "emailFisio": email,
      "matricula": matricula,
      "SemestreFisio": semestre,
      "password" : password,
      "tipoUsuario": 2   
    }

    try{
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
        console.log('Aluno fisioterapeuta criado com sucesso!', jsonResponse);
        Alert.alert("Sucesso", "Conta do Aluno fisioterapeuta criado com sucesso.");
        navigation.navigate('Gerenciar Alunos'); // redireciona para a tela com todos os alunos
      }else{
        const errorResponse = await response.json();
        console.log('Error ao criar conta Aluno fisioterapeuta:', jsonResponse);
        Alert.alert("Error", "Falha ao criar conta Aluno fisioterapeuta. Verificar os dados.");
      }

    }catch(error){
      console.log('Error na requisição:', error);
      Alert.alert("Error", "Ocorreu um error na requisição. tente novamente.");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../../assets/Logo_iesgo.png")}
        />
        <Text style={styles.subHeader}>Criar conta para fisioterapeuta</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="N° Matrícula: 696969"
          value={matricula}
          onChangeText={handleMatriculaChange}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Semestre: 5° Semestre"
          value={semestre}
          onChangeText={setSemestre}
        />
        <TextInput
          style={[styles.input, emailError && styles.inputError]}
          placeholder="Email: email@email.com"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
        />
        {emailError && <Text style={styles.errorText}>Email inválido</Text>}
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.passwordInput, passwordError && styles.inputError]}
            placeholder="Senha"
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry={secureTextEntry}
          />
          <TouchableOpacity onPress={toggleSecureEntry}>
            <Ionicons
              name={secureTextEntry ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.passwordInput, passwordError && styles.inputError]}
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            secureTextEntry={confirmSecureTextEntry}
          />
          <TouchableOpacity onPress={toggleConfirmSecureEntry}>
            <Ionicons
              name={confirmSecureTextEntry ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {passwordError && (
          <Text style={styles.errorText}>As senhas não coincidem</Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={cadastrarAluno}
          disabled={
            !validateEmail(email) ||
            !validatePasswords(password, confirmPassword)
          }
        >
          <Text style={{ fontWeight: "bold", color: "#fff" }}>
            Cadastrar Usuário
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#00005D",
    paddingVertical: 35,
  },
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 8,
    marginBottom: 15,
    fontStyle: "italic",
    fontWeight: "light",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#0000d5",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  image: {
    height: 100,
    width: 300,
    alignSelf: "center",
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 8,
  },
});
