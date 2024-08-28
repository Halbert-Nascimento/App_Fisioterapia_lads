import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/fisioterapeuta/Home";
import AtendimentosTelas from "../screens/fisioterapeuta/AtendimentosTela";
import RelatorioEvolucao from "../screens/fisioterapeuta/RelatorioEvolucaoTela";
// import PreencherProntuarioTela from "../screens/fisioterapeuta/PreencherProntuarioTela";
import RelatorioPacientes from "../screens/fisioterapeuta/relatorioPaciente";
// import EnviarFichaEstagio from "../screens/fisioterapeuta/enviarFichaEstagio";
// import Perfil from "../screens/paciente/perfil";
// import Cadastro from "../screens/paciente/cadastro";
// import Login from "../screens/paciente/login";



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
      <Drawer.Screen name="Meus atendimentos" component={AtendimentosTelas}/> 
      <Drawer.Screen name="Relatorio de pacientes" component={RelatorioPacientes}/> 
      <Drawer.Screen name="Relatorio de evolução médica" component={RelatorioEvolucao}/> 
      {/* <Drawer.Screen name="Enviar ficha de estagio" component={EnviarFichaEstagio}/>  // remover link */}
      {/* <Drawer.Screen name="Preencher Prontuario" component={PreencherProntuarioTela}/> //remover e acessivel somente pelo link do paciente */}
      <Drawer.Screen name="Suporte" component={Home}/> 
      {/* <Drawer.Screen name="Solicitar atendimento" component={Atendimento} /> */}
      {/* <Drawer.Screen name="Meus Agendamentos" component={MeusAgendamentos} /> */}
      {/* <Drawer.Screen name="Meu perfil" component={Perfil} /> */}
      {/* <Drawer.Screen name="Cadastro" component={Cadastro} /> */}
      {/* <Drawer.Screen name="Login" component={Login} /> */}
          
    </Drawer.Navigator>   

  );
}