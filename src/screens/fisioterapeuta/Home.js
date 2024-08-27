import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/styleHomeGeral";

// import {Viewazul, Viewbranco,Viewtopo,Viewbotao, Botaoopcao ,Opcaoimage,Textohome,Logoiesgo ,Textofisio,Botaoservico, Textobotao,Imagembotao,Textohomebranco,Imagemperfil} from './styles';
// import { Linking } from 'react-native';

export default function Home() {
    const navigation = useNavigation();

    return(
        <View style={styles.viewAzul}>
            <View style={styles.viewTopo}>
                <Text style={styles.textoHome}>Olá, </Text>
                <Image
                source={require("../../../assets/Logo_iesgo.png")}
                style={styles.logoIesgo}
                />
                <Text style={styles.textoFisio}>Fisioterapia</Text>
            </View>
            {/* <Viewtopo>
            <Botaoopcao onPress={( )=> navigation.openDrawer()}>
            <Opcaoimage source={require('./img/Opcao2.png')}/>
            </Botaoopcao>
            <Textohome>Olá, Paciente</Textohome>
            <Imagemperfil source={require('./img/Foto.png')} ></Imagemperfil>
            <Logoiesgo source={require('./img/Logo_iesgo.png')} />
            <Textofisio>Fisioterapia</Textofisio>
        

            </Viewtopo> */}
        <View style={styles.viewBranco}>
            <Text style={styles.textoHomeBranco}>O que você precisa hoje?</Text>

            <View style={styles.viewBotao}>
                <TouchableOpacity style={styles.botaoServico}>
                    <Image
                    source={require("../../../assets/Calendar2.png")}
                    style={styles.imagemBotao}
                    />
                    <Text style={styles.textoBotao}>Meus Atendimentos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoServico}>
                    <Image
                    source={require("../../../assets/imagensFisioterapeuta/Relatoriopaciente.png")}
                    style={styles.imagemBotao}
                    />
                    <Text style={styles.textoBotao}>Relatorio de Paciente</Text>
                </TouchableOpacity>

                

                <TouchableOpacity style={styles.botaoServico}>
                    <Image
                    source={require("../../../assets/imagensFisioterapeuta/Relatorioevolucao.png")}
                    style={styles.imagemBotao}
                    />
                    <Text style={styles.textoBotao}>Relatorio de Evolução</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.botaoServico} onPress={() => Linking.openURL('https://wa.me/5561998738838')}>
                    <Image
                    source={require("../../../assets/imagensFisioterapeuta/Suporte2.png")}
                    style={styles.imagemBotao}
                    />
                    <Text style={styles.textoBotao}>Suporte</Text>
                </TouchableOpacity>
       

            

         


                </View>
            </View>
        </View>





    );



}

