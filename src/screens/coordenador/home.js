import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/styleHomeGeral";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.viewAzul}>
      <View style={styles.viewTopo}>
        <Text style={styles.textoHome}>Olá, Coordenador</Text>
        <Image
          source={require("../../../assets/Logo_iesgo.png")}
          style={styles.logoIesgo}
        />
        <Text style={styles.textoFisio}>Fisioterapia</Text>
      </View>

      <View style={styles.viewBranco}>
        <Text style={styles.textoHomeBranco}>O que você precisa hoje?</Text>

        <View style={styles.viewBotao}>
          <TouchableOpacity style={styles.botaoServico}>
            <Image
              source={require("../../../assets/Calendar2.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Todos os Agendamentos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico}>
            <Image
              source={require("../../../assets/add-user-friends-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Cadastrar Fisioterapeuta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico}>
            <Image
              source={require("../../../assets/settings-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Gerenciar Alunos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico}>
            <Image
              source={require("../../../assets/whatsapp-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Suporte</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico}>
            <Image
              source={require("../../../assets/report-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Relatorio dos pacientes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico}>
            <Image
              source={require("../../../assets/tasks-badged-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Ficha de evolução</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
