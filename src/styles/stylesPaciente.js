import styled from "styled-components/native";
import {Platform} from 'react-native';
import { Picker } from "@react-native-picker/picker";

// drawer syled

export const DrawerButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  margin: 10px 5%;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  padding-left: 10px;
  elevation: 3;
`;

export const DrawerButtonText = styled.Text`
  font-size: 16px;
  color: #000000;
  font-family:'Lato-Regular';
`;
export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
`;
export const FecharTexto = styled.Text`
  font-size: 30px;
  color: #000000;
  font-family:'Lato-Regular';
`;

// styles usada na pagina: Login e cadastro
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  
`;
export const Image = styled.Image`
 width: 191px;
height: 71.63px;
margin-bottom:50px;
`;

export const TextLogin = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  position: 'absolute';
  margin-right: ${Platform.OS !== 'web' ? '100px' : '69%'};
  font-family:'Inter-Bold';
  font-color:#484848;
`;

export const Input = styled.View`
  width: 80%;
  margin-bottom: 20px;
`;

export const TextInput = styled.TextInput`
  height: 40px;
  border-width: 1px;
  border-color: #ccc;
  margin-bottom: 20px;
  padding-left: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 4px #00000040;
  elevation: 5;
  font-family:'Inter-Regular';
  font-style: italic;
`;

export const LoginButton = styled.TouchableOpacity`
  width:80%;
  height:58px;
  border-radius: 10px ;
  border: 1px ;
  background:#00005D;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #00000033;
  box-shadow: 4px 4px  #00000040;

`;

export const LoginButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  margin-top: 5px;
  font-family:'Inter-Bold';

`;

export const Viewsign = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position:fixed;
  top: 180px;

`;


// styles usado em cadastro:

export const Header = styled.View`
  background: #00005D;
  padding: 30px;
  width: 100%;
  align-items: flex-start;
  flex-direction: row;
`

export const ScrollContainer = styled.ScrollView`
flex: 1;
width: 100%;

`;

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 50px;
`;
export const BackButtonImage = styled.Image`
 width: 30px;
  height: 30px;
`;

export const FakeInput = styled.View`
  height: 40px;
  border-color: #ccc;
  border-width: 1px;
  margin-bottom: 20px;
  padding: 5px;
  flex-direction: row;
  justify-content: space-around;
  align-item:center;
  border-radius: 10px;
 
`;

export const Containerbotao = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding-right: 10px;
`;
export const Botaomf= styled.TouchableOpacity`
  width: 20px;
  padding: 5px;
  background-color: ${(props) => (props.selected ? '#00005D' : '#DDDDDD')};
  border-radius: 5px;
   marginHorizontal: 5px;
  
`;


export const Falsoinputtexto = styled.Text`
 font-size: 14px;
  color: #565656;
  position: absolute;
  left:10px;
  top: 10px;
  font-family:'Inter-Regular';
`
export const Textomf = styled.Text`
  color: ${(props) => (props.selected ? '#FFFFFF' : '#000000')};
  font-weight: bold;
  font-size: 12px;
  text-align:center;
  font-family:'Inter-Regular';
`;

export const EspacoPicker= styled.View`
  height: 40px;
  width: 100%;
  border-width: 1px;
  border-color: #ccc;
  margin-bottom: 20px;
  padding-left: 100px;
  padding-bottom: 5px;
  padding-top: 5px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 4px #00000040;
  elevation: 5;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-style:'bold';
  
`
export const Estadocivil= styled(Picker)`
 height: 40px;
  width: 100%;
  font-family: 'Inter-Regular';
  align-items: center;
  
  
`
export const PickerTexto= styled.Text`
 position: absolute;
  left: 3px;
  top: 5px;
  font-size: 15px;
  color: #565656;
  background-color: #fff;
  padding: 5px 10px;
  font-style: italic;
`
export const PickerItem = styled(Picker.Item)`

  align-self: center;
 
`;

//styles usada para Login

export const Textsignup = styled.Text`
font-size: 14px;
font-family:'Inter-Regular';
`;

export const Signup = styled.TouchableOpacity`
`;




// styles usado no home

export const Viewazul = styled.View`
  flex: 1;
  background-color: #00005D;
`;

export const Viewtopo = styled.View`
  width: 100%;
  height: 45%;
  background-color: #00005D;
  justify-content: center;
  align-items: center;
`;

export const Viewbranco = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;
  margin-top: -30px;

`;

export const Viewbotao = styled.View`
flex: 1;
  height: 400px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:3px;
  margin-padding: 10px;
  
`;

export const Opcaoimage = styled.Image`
  width: 35px;
  height: 35px;
`;

export const Logoiesgo = styled.Image`
  width: 280px;
  height: 108px;
  tint-color: #FFFFFF;
  margin-top:60px;
`;

export const Imagembotao = styled.Image`
  width: 40px;
  height: 40px;
  
  
`;

export const Imagemperfil = styled.Image`
  position:relative;
  left:150px;
  width: 45px;
  height: 45px;
  border-radius: 20px;
`;

export const Botaoservico = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border: 1px solid;
  border-radius: 10px;
  elevation: 10;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  margin-top: 30px;
  border-width: 1px;
  border-color: #ccc;
`;

export const Botaoopcao = styled.TouchableOpacity`
position:absolute;
top:60px;
left:15px;
`;

export const Textobotao = styled.Text`
  text-align: center;
  font-size: 12px;
  font-family:'Inter-Regular';
`;

export const Textohome = styled.Text`
position:absolute;
  font-size: 20px;
  color:#FFFFFF;
  margin-top: 20px;
  left:15px;
  top:90px;
  font-family:'Lato-Regular';
`;
export const Textohomebranco = styled.Text`
  font-size: 20px;
  color: #000000;
font-family:'Inter-Regular';
`;

export const Textofisio = styled.Text`
  font-size: 36px;
  color:#FFFFFF;
  text-align: center; 
  margin-left:10px;
  font-family:'Inter-Bold';
`;


export const DrawerItem = ({ title, onPress }) => (
  <DrawerButton onPress={onPress}>
    <DrawerButtonText>{title}</DrawerButtonText>
  </DrawerButton>
);