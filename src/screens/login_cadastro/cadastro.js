import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet , Alert } from "react-native";
import { styles } from "../../styles/styleCadastroLogin";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

export default function Cadastro() {
    const navigation = useNavigation();

    // estados para capturar os dados do formulario
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
    const [profissao, setProfissao] = useState('');
    const [telefone, setTelefone] = useState('');
    const [estadoCivil, setEstadoCivil] = useState('solteiro');
    const [diagnosticoClinico, setDiagnosticoClinico] = useState(''); // novo campo
    const [diagnosticoFisio, setDiagnosticoFisio] = useState(''); // novo campo

    // Função para converter a data para o formato ISO-8601
    function convertToISODate(dateString) {
        const [day, month, year] = dateString.split('/');
        const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00`;
        return isoDate;
    }

    const [generoselect, setgenero] = useState('');
    const selectGenero = (generomf) => {
        setgenero(generomf);
    };

    //função para criar a conta do paciente
    async function criarContaPaciente() {
        if(senha !== confirmaSenha){
            Alert.alert("Error", "As senhas não coincidem.");
            return;
        }

        const url = 'http://189.6.22.122:12010/Paciente'; // rota
        const dataNascimentoISO = convertToISODate(dataNascimento); // converter a data

        const dados = {
            "idPaciente": 0,
            "nomePaciente": nome,
            "cpf": cpf,
            "uf": uf,
            "endereco": endereco,
            "numeroCasa": numCasa,
            "dataDeNascimento": dataNascimentoISO,
            "sexo": generoselect,
            "proficao": profissao,
            "diagnosticoClinico": diagnosticoClinico, // novo campo
            "diagnosticoFisio": diagnosticoFisio, // novo campo
            "emailPaciente": email,
            "password": senha,
            "tipoUsuario": 4
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados)
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log('Paciente criado com sucesso!', jsonResponse);
                Alert.alert("Sucesso", "Conta do paciente criada com sucesso.");
                navigation.navigate('login');
            } else {
                const errorResponse = await response.text();
                console.log('Erro ao criar conta Paciente:', errorResponse);
                Alert.alert("Error", "Falha ao criar conta. Verifique os dados.");
            }
        } catch (error) {
            console.log('Erro na requisição:', error);
            Alert.alert("Error", "Ocorreu um erro na requisição. Tente novamente.");
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.scrollContainer}>
                <Image source={require('../../../assets/imagensPaciente/Logo_iesgo.png')} style={styles.image} />
                <Text style={styles.textLogin}>Criar conta paciente</Text>

                <View style={styles.input}>
                    <TextInput style={styles.textInput} 
                        placeholder='Nome completo' 
                        value={nome}
                        onChangeText={setNome}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='CPF' 
                        value={cpf}
                        onChangeText={setCpf}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='CEP' 
                        value={cep}
                        onChangeText={setCep}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='UF' 
                        value={uf}
                        onChangeText={setUf}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Endereço' 
                        value={endereco}
                        onChangeText={setEndereco}                    
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Número da casa' 
                        value={numCasa}
                        onChangeText={setNumCasa}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Email' 
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Senha' secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}                   
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Confirmar senha' secureTextEntry={true}
                        value={confirmaSenha}
                        onChangeText={setConfirmaSenha}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Data de Nascimento' 
                        value={dataNascimento}
                        onChangeText={setDataNascimento}
                    />

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

                    <TextInput style={styles.textInput} 
                        placeholder='Profissão' 
                        value={profissao}
                        onChangeText={setProfissao}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Diagnóstico Clínico' // novo campo
                        value={diagnosticoClinico}
                        onChangeText={setDiagnosticoClinico}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Diagnóstico Fisio' // novo campo
                        value={diagnosticoFisio}
                        onChangeText={setDiagnosticoFisio}
                    />
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={criarContaPaciente}>
                    <Text style={styles.loginButtonText}>Sign up</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
