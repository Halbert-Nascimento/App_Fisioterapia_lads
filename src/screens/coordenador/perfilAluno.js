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
                    {/* <Image source={logoIesgo} style={styles.bottomButton} /> */}

                    {/* <TouchableOpacity  style={styles.bottomButton}>
                        <View  style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text  style={{ color: 'white', fontSize: 16, marginRight: 5, fontWeight: 'bold' }}>Enviar</Text>
                            <Image source={enviarIcon} style={styles.enviar} />
                        </View>
                    </TouchableOpacity> */}
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
    image: {
        width: 230,
        height: 50,
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
    // upload: {
    //     width: 25,
    //     height: 25,
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    // },
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
