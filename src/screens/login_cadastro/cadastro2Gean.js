import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet , Alert} from "react-native";
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

 //função para criar a conta do coordenador
    async function criarContaPaciente() {
        if(senha !== confirmaSenha){
            Alert.alert("Error", "As senha não coincidem. ")
            return;
        }
        const url = 'http://189.6.22.122:12010/Paciente'; //rota
        //realizar a conversão da data para o formato ISO-8601 antes de enviar para o backend
        const dataNascimentoISO = convertToISODate(dataNascimento);
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
            "diagnosticoClinico": "Implementar", //verificar a falta desse campo no cadastro se realmente e necessario
            "diagnosticoFisio": "Implementar", //verificar a falta desse campo no cadastro se realmente e necessario
            "emailPaciente": email,
            "password" : senha,
            "tipoUsuario": 4

                         //campos que tem no figma mas nao tem na documentação api
            // "cepPaciente": cep,                  
            // "telefonePaciente": telefone,
            // "estadoCivilPaciente": estadoCivil
        };
        try{
            const response = await fetch(url,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados)
            });
            if(response.ok){
                const jsonResponse = await response.json();
                console.log('Paciente criado com sucesso!', jsonResponse);
                Alert.alert("Sucesso", "Conta do paciente criado com sucesso.");
                navigation.navigate('login');
            }else{
                // const errorResponse = await response.json();
                const errorResponse = await response.text(); // trocar para text para ver o erro
                console.log('Error ao criar conta Paciente:', errorResponse);
                Alert.alert("Error", "Falha ao criar conta. Verificar os dados.");
            }
        }
        catch(error){
            console.log('Error na requisição:', error);
            Alert.alert("Error", "Ocorreu um error na requisição. tente novamente'");
        }


    } 

    // const [selectedValue, setSelectedValue] = useState("solteiro");

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
                    <TextInput style={styles.textInput} 
                        placeholder='Email: email@email.com'
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Password: ***************' secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}                   
                    />
                    <TextInput style={styles.textInput} 
                        placeholder='Confirm password: ***************' secureTextEntry={true}
                        value={confirmaSenha}
                        onChangeText={setConfirmaSenha}
                    />
                    <TextInput style={styles.textInput} 
                        placeholder='Data de Nascimento: 00/00/0000'
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
                        placeholder='Profissão: '
                        value={profissao}
                        onChangeText={setProfissao}
                    />
                    <TextInput style={styles.textInput} 
                        placeholder='Telefone: (61) 9 9999-9999'
                        value={telefone}
                        onChangeText={setTelefone}
                    />
                    
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

                <TouchableOpacity style={styles.loginButton} onPress={criarContaPaciente}>
                    <Text style={styles.loginButtonText}>Sign up</Text>
                </TouchableOpacity>

                
            </ScrollView>
        </View>
    );
}
