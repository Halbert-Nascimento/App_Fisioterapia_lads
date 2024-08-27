import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

export default function VisualizarRelatorio() {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>Tela de Visualizar Relatório</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
