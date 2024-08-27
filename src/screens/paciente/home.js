import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/styleHomeGeral";


export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.viewAzul}>
      <View style={styles.viewTopo}>
        {/* aqui estava usando o estilos antigo de imageperfil, fazer um novo seguindo o adrao */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Image source={require('../../../assets/imagensPaciente/Foto.png')} style={Imagemperfil} />
        </TouchableOpacity> */}
      <Text style={styles.textoHome}>Olá, Paciente</Text>
        <Image
          source={require("../../../assets/Logo_iesgo.png")}
          style={styles.logoIesgo}
        />
        <Text style={styles.textoFisio}>Fisioterapia</Text>

        {/* verficar trexo do codigo, fazer menu de navegação se forma padronizada */}
        {/* <TouchableOpacity style={Botaoopcao} onPress={() => navigation.openDrawer()}>
          <Image source={require('../../../assets/imagensPaciente/Opcao2.png')} style={Opcaoimage} />
        </TouchableOpacity> */}
        
        {/* <Text style={Textohome}>Olá, Paciente</Text> */}
       
        {/* <Image source={require("../../../assets/imagensPaciente/Logo_iesgo.png")} style={Logoiesgo} />
        <Text style={Textofisio}>Fisioterapia</Text> */}
      </View>

      <View style={styles.viewBranco}>
        <Text style={styles.textoHomeBranco}>O que você precisa hoje?</Text>

        <View style={styles.viewBotao}>
          <TouchableOpacity style={styles.botaoServico} onPress={() => navigation.navigate('Atendimento')}>
            <Image source={require('../../../assets/imagensPaciente/Calendar2.png')} style={styles.imagemBotao} />
            <Text style={styles.textoBotao}>Solicitar Atendimento</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico} onPress={() => navigation.navigate('MeusAgendamentos')}>
            <Image source={require('../../../assets/imagensPaciente/Agendamento3.png')} style={styles.imagemBotao} />
            <Text style={styles.textoBotao}>Meus Agendamentos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico}>
            <Image source={require('../../../assets/imagensPaciente/Suporte2.png')} style={styles.imagemBotao} />
            <Text style={styles.textoBotao}>Suporte</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoServico} onPress={() => navigation.navigate('Perfil')}>
            <Image source={require('../../../assets/imagensPaciente/Perfil2.png')} style={styles.imagemBotao} />
            <Text style={styles.textoBotao}>Meu Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
