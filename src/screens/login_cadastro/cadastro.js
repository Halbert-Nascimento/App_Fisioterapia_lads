import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { styles } from "../../styles/styleCadastroLogin";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

export default function Cadastro() {
    const navigation = useNavigation();

    const [generoselect, setgenero] = useState('');
    const selectGenero = (generomf) => {
        setgenero(generomf);
    };
    const [selectedValue, setSelectedValue] = useState("solteiro");

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.scrollContainer}>
                              
                <Image source={require('../../../assets/imagensPaciente/Logo_iesgo.png')} style={styles.image} />
                <Text style={styles.textLogin}>Criar sua conta</Text>
                
                <View style={styles.input}>
                    <TextInput style={styles.textInput} placeholder='Nome completo: ' />
                    <TextInput style={styles.textInput} placeholder='CPF: 000.000.000-00 ' />
                    <TextInput style={styles.textInput} placeholder='Cep: 73807775' />
                    <TextInput style={styles.textInput} placeholder='UF: GO' />
                    <TextInput style={styles.textInput} placeholder='Endereço: Rua das ruas' />
                    <TextInput style={styles.textInput} placeholder='Numero da casa: 1001' />
                    <TextInput style={styles.textInput} placeholder='Email: email@email.com' />
                    <TextInput style={styles.textInput} placeholder='Password: ***************' secureTextEntry={true} />
                    <TextInput style={styles.textInput} placeholder='Confirm password: ***************' secureTextEntry={true} />
                    <TextInput style={styles.textInput} placeholder='Data de Nascimento: 00/00/0000' />
                    
                    <View style={styles.fakeInput}>
                        <Text style={styles.falsoinputtexto}>Sexo:</Text>
                        <View style={styles.containerbotao}>
                            <TouchableOpacity style={[styles.botaomf, generoselect === 'M' && { backgroundColor: '#00005D' }]} onPress={() => selectGenero('M')}>
                                <Text style={[styles.textomf, generoselect === 'M' && { color: '#FFFFFF' }]}>M</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.botaomf, generoselect === 'F' && { backgroundColor: '#00005D' }]} onPress={() => selectGenero('F')}>
                                <Text style={[styles.textomf, generoselect === 'F' && { color: '#FFFFFF' }]}>F</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <TextInput style={styles.textInput} placeholder='Profissão: ' />
                    <TextInput style={styles.textInput} placeholder='Telefone: (61) 9 9999-9999' />
                    
                    <View style={styles.espacoPicker}>
                        <Text style={styles.pickerTexto}>Estado Civil: </Text>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                            style={styles.estadocivil}
                        >
                            <Picker.Item label="Solteiro" value="solteiro" />
                            <Picker.Item label="Casado" value="casado" />
                            <Picker.Item label="Separado" value="separado" />
                            <Picker.Item label="Divorciado" value="divorciado" />
                            <Picker.Item label="Viúvo" value="viuvo" />
                        </Picker>
                    </View>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginButtonText}>Sign up</Text>
                </TouchableOpacity>

                
            </ScrollView>
        </View>
    );
}
