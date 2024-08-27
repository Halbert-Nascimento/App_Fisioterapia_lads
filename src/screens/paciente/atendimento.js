import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'; // Adicionando ScrollView
import { useNavigation } from '@react-navigation/native';
// import { styles } from "../../styles/styleHomeGeral";

const pedidosIcon = require('../../../assets/imagensPaciente/pedidos.png');
const uploadIcon = require('../../../assets/imagensPaciente/upload.png');
const enviarIcon = require('../../../assets/imagensPaciente/enviar.png');
const setaIcon = require('../../../assets/imagensPaciente/seta.png');


export default function Atendimento() {
    const navigation = useNavigation();
    const [primeiraConsulta, setPrimeiraConsulta] = useState(null);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* criar um menu de volta em pilha que volta para outro menu retirado para teste */}
                {/* <View style={styles.header}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')}  style={styles.backButton}>
                        <Image source={setaIcon} style={styles.setaImage} />
                    </TouchableOpacity>
                    <Text  style={styles.headerText}>Solicitar Atendimento</Text>
                </View> */}

                <View style={styles.imageContainer}>
                    <Image source={pedidosIcon} style={styles.image} />
                    <Text style={styles.text}>Enviar Pedido médico:</Text>

                    <View style={styles.bottomContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Carregar Documentos:</Text>
                            <Image source={uploadIcon} style={styles.upload} />
                        </TouchableOpacity>

                        <View style={styles.booleanContainer}>
                            <Text style={styles.booleanText}>É sua primeira consulta?</Text>
                            <View style={styles.booleanOptions}>
                                <TouchableOpacity
                                    style={[styles.optionButton, primeiraConsulta === 'S' && styles.optionSelected]}
                                    onPress={() => setPrimeiraConsulta('S')}
                                >
                                    <Text style={[styles.optionText, primeiraConsulta === 'S' && styles.optionSelectedText]}>S</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.optionButton, primeiraConsulta === 'N' && styles.optionSelected]}
                                    onPress={() => setPrimeiraConsulta('N')}
                                >
                                    <Text style={[styles.optionText, primeiraConsulta === 'N' && styles.optionSelectedText]}>N</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.bottomButton}>
                        <View  style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text  style={{ color: 'white', fontSize: 16, marginRight: 5, fontWeight: 'bold' }}>Enviar</Text>
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
    header: {
        height: 80,
        backgroundColor: '#00005D',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    backButton: {
        position: 'absolute',
        left: 15,
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 35,
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 20,
        color: '#202020',
        marginLeft: 40,
        marginRight: 'auto',
        textAlign: 'left',
        marginTop: 30,
        fontWeight: 'bold',
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
    upload: {
        width: 25,
        height: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
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
