import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Agendamentos from "../screens/coordenador/agendamentos";
import CreateFisio from "../screens/coordenador/createFisio";
import Students from "../screens/coordenador/students";
import StudentDetails from "../screens/coordenador/studentDetails";
import Patient from "../screens/coordenador/patient";
import PatientDetails from "../screens/coordenador/patientDetails";
import Prontuario from "../screens/coordenador/prontuario";

const Stack = createNativeStackNavigator();

export default function PatientStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todos os agendamentos" component={Agendamentos} />
      <Stack.Screen name="Cadastrar Aluno" component={CreateFisio} />
      <Stack.Screen name="Gerenciar Alunos" component={Students} />
      <Stack.Screen name="Pacientes" component={Patient} />
      <Stack.Screen name="Detalhes do Paciente" component={PatientDetails} />
      <Stack.Screen name="Relatorio de pacientes" component={Patient} />
      <Stack.Screen name="Prontuario" component={Prontuario} />
    </Stack.Navigator>
  );
}
