import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/styleHomeGeral";

const Juncao = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewAzul}>
      <View style={styles.viewTopo}>        
        <Image
          source={require("../../../assets/Logo_iesgo.png")}
          style={styles.logoIesgo}
        />
        <Text style={styles.textoFisio}>Fisioterapia</Text>
      </View>

      <View style={styles.viewBranco}>
        <Text style={styles.textoHomeBranco}>Entrar como:</Text>

        <View style={styles.viewBotao}>         
          <TouchableOpacity style={styles.botaoServico} onPress={() => navigation.navigate('AppRoutesCoord')}>
            <Image
              source={require("../../../assets/settings-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>COORDENADOR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico} onPress={() => navigation.navigate('AppRoutesFisio')}>
            <Image
              source={require("../../../assets/add-user-friends-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>FISIOTERAPEUTA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico} onPress={() => navigation.navigate('AppRoutesPaciente')}>
            <Image
              source={require("../../../assets/report-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>PACIENTE</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.botaoServico} onPress={() => navigation.navigate('Login')}>
            <Image
              source={require("../../../assets/report-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoServico} onPress={() => navigation.navigate('CadastroCoordenador')}>
            <Image
              source={require("../../../assets/report-svgrepo-com.png")}
              style={styles.imagemBotao}
            />
            <Text style={styles.textoBotao}>Cadastro Coord</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default Juncao;
