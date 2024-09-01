import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/styleCadastroLogin";

export default function Login() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/imagensPaciente/Logo_iesgo.png')} style={styles.image} />
      <Text style={styles.textLogin}>Login To Your Account</Text>
      
      <View style={styles.input}>
        <TextInput style={styles.textInput} placeholder='Email: email@email.com' />
        <TextInput style={styles.textInput} placeholder='Password: ***************' secureTextEntry={true} />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginButtonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.viewsign}>
        <Text style={styles.textsignup}>Don't have an account? </Text> 
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={[styles.textsignup, { color: '#00005D', fontSize: 14 }]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
