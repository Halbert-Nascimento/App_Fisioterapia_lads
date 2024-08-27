import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/coordenador/home";
import Agendamentos from "../screens/coordenador/agendamentos";
import CreateFisio from "../screens/coordenador/createFisio";
import Students from "../screens/coordenador/students";
import StudentDetails from "../screens/coordenador/studentDetails";
import Patient from "../screens/coordenador/patient";
import PatientDetails from "../screens/coordenador/patientDetails";
import Prontuario from "../screens/coordenador/prontuario";

import HomePaciente from "../screens/paciente/home"
const Drawer = createDrawerNavigator();


export default function AppRoutesCoord(){
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
      <Drawer.Screen name="Todos Agendamentos" component={Agendamentos} />
      <Drawer.Screen name="Cadastrar Fisioterapeuta" component={CreateFisio} />
      <Drawer.Screen name="Gerenciar Alunos" component={Students} />

      {/* Detalhes do paciente e prontuario será uma stack navigation */}
      <Drawer.Screen name="Detalhes do Aluno" component={StudentDetails} />
      <Drawer.Screen name="Pacientes" component={Patient} />
      <Drawer.Screen name="Detalhes do Paciente" component={PatientDetails} />
      <Drawer.Screen name="Prontuario" component={Prontuario} />
      <Drawer.Screen name="Home paciente" component={HomePaciente} options={{headerTitle: ""}} />
    
    </Drawer.Navigator>   

  );
}