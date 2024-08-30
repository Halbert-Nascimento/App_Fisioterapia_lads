import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'; // Adicionando ScrollView
import { useNavigation } from '@react-navigation/native';
// import { styles } from "../../styles/styleHomeGeral";

const logoIesgo = require('../../../assets/iesgo.png');
const uploadIcon = require('../../../assets/imagensPaciente/upload.png');
const enviarIcon = require('../../../assets/imagensPaciente/enviar.png');
const setaIcon = require('../../../assets/imagensPaciente/seta.png');


export default function PerfilAluno() {
    const navigation = useNavigation();
    const [primeiraConsulta, setPrimeiraConsulta] = useState(null);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.imageContainer}>
                    <Image source={logoIesgo} style={styles.image} />
                   

                    <View style={styles.bottomContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome:"
                            // value={nome}
                            // onChangeText={setNome}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Telefone:"
                        />
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Email:"
                        />
                        
                        <TextInput
                            style={styles.input}
                            placeholder="N. Matricula: 1001001:"
                        />
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Semestre: 5º Semestre:"
                        />                    

                        
                    </View>
                    <View style={styles.imageContainerBt}>
                        {/* <Image source={logoIesgo} style={styles.image}  /> */}
                    </View>
                   

                    <TouchableOpacity  style={styles.bottomButton}>
                        <View  style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text  style={styles.textsalvar}>Salvar Alterações</Text>
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

    input: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 5,
      padding: 8,
      marginBottom: 15,
      fontStyle: "italic",
      fontWeight: "light",
    },

    imageContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    
    imageContainerBt: {
        width: '80%',
        height: 69,
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: '#00005e',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },

    image: {
        width: 230,
        height: 50,
    },

    bottomContainer: {
        width: '80%',       
        borderRadius: 10,
        marginTop: 30,
        padding: 10,
        // paddingBottom: 200,
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


    bottomButton: {
        // backgroundColor: '#00005D',
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        padding: 8,
        width: '80%',
        borderWidth: 1,
        borderColor: 'gray',
        
        
    },
    enviar: {
        backgroundColor: '#00005D',  
       position: 'absolute',
       right: -10,
        width: 55,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        // marginRight: 0,
    },
    textsalvar:{
        color: 'grey', 
        fontSize: 15, 
        marginRight: 5, 
        fontWeight: 'bold', 
        

    }
});
