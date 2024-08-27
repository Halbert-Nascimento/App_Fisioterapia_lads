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
          <Text style={[styles.textsignup, { color: '#00005D', fontFamily: 'Inter-Bold', fontSize: 14 }]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginTop: 20,
//     marginBottom: 50,
//   },
//   textLogin: {
//     color: '#000',
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     marginBottom: 20,
//   },
//   textInput: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginBottom: 20,
//     paddingLeft: 10,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     boxShadow: '0px 2px 4px #00000040',
//     elevation: 5,
//     fontFamily: 'Inter-Regular',
//     fontStyle: 'italic',
//   },
//   loginButton: {
//     width: '80%',
//     height: 58,
//     borderRadius: 10,
//     backgroundColor: '#00005D',
//     padding: 10,
//     borderRadius: 10,
//     border: '1px solid #00000033',
//     boxShadow: '4px 4px #00000040',
//   },
//   loginButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 16,
//     marginTop: 5,
//     fontFamily: 'Inter-Bold',
//   },
//   viewsign: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   textsignup: {
//     color: '#000',
//     fontSize: 14,
//     fontFamily: 'Inter-Regular',
//   },
// });
