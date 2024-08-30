import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/paciente/home";
import Atendimento from "../screens/paciente/atendimento";
import MeusAgendamentos from "../screens/paciente/meusAgendamentos";
import Perfil from "../screens/paciente/perfil";
import Cadastro from "../screens/login_cadastro/cadastro";
import Login from "../screens/login_cadastro/login";
import CancelarAgendamento from "../screens/paciente/CancelarAgendamento"



const Drawer = createDrawerNavigator();


export default function Test_RoutesPaciente(){
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00005d",
          shadowOpacity: 0,
          elevation: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >

      <Drawer.Screen name="Home" component={Home} options={{headerTitle: ""}}/> 
      <Drawer.Screen name="Solicitar atendimento" component={Atendimento} />
      <Drawer.Screen name="Meus Agendamentos" component={MeusAgendamentos} />
      <Drawer.Screen name="Meu perfil" component={Perfil} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Cancelar Agendamento" component={CancelarAgendamento} />
          
    </Drawer.Navigator>   

  );
}