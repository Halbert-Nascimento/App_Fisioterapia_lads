import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/styleHomeGeral";
import AsyncStorage from "@react-native-async-storage/async-storage";
import decodeJWT from '../../utils/jwtDecode';



export default function Home() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('Cord'); // Estado para armazenar o nome do usuário

  // Função para buscar o token e decodificar o nome
  useEffect(() => {
    async function fetchToken() {
      try {
        const token = await AsyncStorage.getItem('token'); // Aguarda o token
        if (token) {
          const decodedToken = decodeJWT(token); // Decodifica o token
          setNome(decodedToken.Nome); // Atualiza o estado com o nome
        } else {
          console.log("Token não encontrado.");
        }
      } catch (error) {
        console.log("Erro ao buscar o token:", error);
      }
    }

    fetchToken(); // Chama a função quando o componente é montado
  }, []);

  return (
    <View style={styles.viewAzul}>
      <View style={styles.viewTopo}>
        <Text style={styles.textoHome}>Olá, {nome}</Text>
        <Image
          source={require("../../../assets/Logo_iesgo.png")}
          style={styles.logoIesgo}
        />
        <Text style={styles.textoFisio}>Fisioterapia</Text>
      </View>

      <View style={styles.viewBranco}>
        <Text style={styles.textoHomeBranco}>O que você precisa hoje?</Text>

        <View style={styles.viewBotao}>
          <TouchableOpacity style={styles.botaoServico} onPress={() => navigation.navigate("Todos Agendamentos")}>
            <Image
              source={require("../../../assets/Calendar2.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Todos os Agendamentos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico} onPress={() => navigation.navigate("Cadastrar Aluno")}>
            <Image
              source={require("../../../assets/add-user-friends-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Cadastrar Aluno</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico} onPress={() => navigation.navigate("Gerenciar Alunos")}>
            <Image
              source={require("../../../assets/settings-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Gerenciar Alunos</Text>
          </TouchableOpacity>          

          <TouchableOpacity style={styles.botaoServico}  onPress={() => navigation.navigate("Todos Pacientes")}>
            <Image
              source={require("../../../assets/report-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Relatorio dos pacientes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico} onPress={() => navigation.navigate("Todos Pacientes")}>
            <Image
              source={require("../../../assets/tasks-badged-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Ficha de evolução</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico}>
            <Image
              source={require("../../../assets/whatsapp-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Suporte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
