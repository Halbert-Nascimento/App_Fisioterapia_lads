import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { styles } from "../../styles/styleCadastroLogin";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

export default function Cadastro() {
    const navigation = useNavigation();

    //criar useState para nome, cpf, cep, uf, endereco, email, senha, confirmar senha, data de nascimento, sexo, profissao, telefone, estado civil
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [uf, setUf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numCasa, setNumCasa] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [sexo, setSexo] = useState('');
    const [profissao, setProfissao] = useState('');
    const [telefone, setTelefone] = useState('');
    const [estadoCivil, setEstadoCivil] = useState('solteiro');
    

    const [generoselect, setgenero] = useState('');
    const selectGenero = (generomf) => {
        setgenero(generomf);
    };
    const [selectedValue, setSelectedValue] = useState("solteiro");

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.scrollContainer}>
                              
                <Image source={require('../../../assets/imagensPaciente/Logo_iesgo.png')} style={styles.image} />
                <Text style={styles.textLogin}>Criar conta paciente</Text>
                
                <View style={styles.input}>
                    <TextInput style={styles.textInput} 
                        placeholder='Nome completo: ' 
                        value={nome}
                        onChangeText={setNome}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='CPF: 000.000.000-00 ' 
                        value={cpf}
                        onChangeText={setCpf}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Cep: 73807775' 
                        value={cep}
                        onChangeText={setCep}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='UF: GO' 
                        value={uf}
                        onChangeText={setUf}    
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Endereço: Rua das ruas' 
                        value={endereco}
                        onChangeText={setEndereco}                    
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Numero da casa: 1001' 
                        value={numCasa}
                        onChangeText={setNumCasa}
                    />
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
                            selectedValue={estadoCivil}
                            onValueChange={(itemValue) => setEstadoCivil(itemValue)}
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
