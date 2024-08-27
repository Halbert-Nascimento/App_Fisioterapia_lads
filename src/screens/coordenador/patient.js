import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const patients = [
  { nome: "Junior" },
  { nome: "Maria" },
  { nome: "Pedro" },
  { nome: "Julia" },
  { nome: "Carlos" },
];

export default function Patient() {
  return (
    <View style={styles.container}>
      {patients.map((patient, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Text style={styles.buttonText}>{patient.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  header: {
    width: "100%",
    padding: 20,
    backgroundColor: "#000066",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#000066",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
