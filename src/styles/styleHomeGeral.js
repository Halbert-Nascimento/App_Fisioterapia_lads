import { StyleSheet, Platform } from 'react-native';


export const styles = StyleSheet.create({
  viewAzul: {
    flex: 1,
    backgroundColor: "#00005D",
  },
  viewTopo: {
    width: "100%",
    height: "45%",
    backgroundColor: "#00005D",
    justifyContent: "center",
    alignItems: "center",
  },
  viewBranco: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: -30,
  },
  viewBotao: {
    flex: 1,
    height: 400,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 3,
    margin: 10,
  },
  logoIesgo: {
    width: 280,
    height: 108,
    tintColor: "#FFFFFF",
    marginTop: 60,
  },
  imagemBotao: {
    width: 40,
    height: 40,
    marginBottom: 5
  },
  textoBotao: {
    textAlign: "center",
    fontSize: 12,
    paddingHorizontal: 5
  },
  textoHome: {
    position: "absolute",
    fontSize: 20,
    color: "#FFFFFF",
    left: 15,
    top: 30,
  },
  textoHomeBranco: {
    fontSize: 20,
    color: "#000000",
  },
  textoFisio: {
    fontSize: 36,
    color: "#FFFFFF",
    textAlign: "center",
    marginLeft: 10,
  },
  botaoServico: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginTop: 30,
    borderColor: "#ccc",
  },
});
