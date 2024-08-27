import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const Prontuario = () => {
  const [isSelected, setIsSelected] = useState("nao");
  const [isSelectedDM, setIsSelectedDM] = useState("nao");
  const [isSelectedHAS, setIsSelectedHAS] = useState("nao");
  const [isSelectedTri, setIsSelectedTri] = useState("nao");
  const [isSelectedBic, setIsSelectedBic] = useState("nao");
  const [isSelectedRad, setIsSelectedRad] = useState("nao");
  const [isSelectedPat, setIsSelectedPat] = useState("nao");
  const [isSelectedCal, setIsSelectedCal] = useState("nao");
  const [isSelectedCuAb, setIsSelectedCuAb] = useState("nao");
  const [isSelectedCuPla, setIsSelectedCuPla] = useState("nao");
  const [isSelectedCon, setIsSelectedCon] = useState("nao");
  const [isSelectedUlc, setIsSelectedUlc] = useState("nao");
  const [isSelectedDeam, setIsSelectedDeam] = useState("nao");
  const [isSelectedTonusM, setIsSelectedTonusM] = useState("normal");

  const [exams, setExams] = useState([{ description: "", result: "" }]);
  const addExam = () => {
    setExams([...exams, { description: "", result: "" }]);
  };

  const [muscleGroups, setMuscleGroups] = useState([{ muscle: "", grade: "" }]);
  const addMuscleGroup = () => {
    setMuscleGroups([...muscleGroups, { muscle: "", grade: "" }]);
  };

  const [movements, setMovements] = useState([
    { movimento: "", ativa: "", passiva: "" },
  ]);
  const addMovement = () => {
    setMovements([...movements, { movimento: "", ativa: "", passiva: "" }]);
  };

  return (
    <ScrollView>
      {/* Prontuario */}
      <Image
        style={styles.image}
        source={require("../../../assets/prontuarioImg.png")}
      />
      <View style={styles.scrollStyle}>
        {/* Primeira Section */}
        <View style={styles.section}>
          <TextInput style={styles.input} placeholder="Unidade:" />

          <TextInput style={styles.input} placeholder="Setor de Atendimento:" />

          <TextInput style={styles.input} placeholder="Data: 00/00/0000" />
        </View>

        {/* Section de Dados Pessoais */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>
            1 - Identificação do paciente/Dados pessoais
          </Text>
          {[
            "Nome:",
            "Data de Nascimento:",
            "Sexo:",
            "Endereço:",
            "Estado Civil:",
            "Profissão:",
            "Telefone:",
            "Responsavel:",
            "Em caso de emergência avisar:",
            "Telefone de emeregência:",
            "Diagnostico Clinico:",
            "Diagnostico Fisioterapeutico:",
            "Medico Responsavel:",
          ].map((field) => (
            <React.Fragment key={field}>
              <TextInput style={styles.input} placeholder={field} />
            </React.Fragment>
          ))}
        </View>

        {/* Section Anamnese */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>2 - Anamnese</Text>
          {["Queixa Principal:", "HMA:", "HMP:", "AVD:"].map((field) => (
            <React.Fragment key={field}>
              <TextInput style={styles.input} placeholder={field} />
            </React.Fragment>
          ))}

          {/* Cirurgias Anamnese */}
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>Realizou Cirurgias?</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelected === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelected("sim")}
              >
                <Text
                  style={
                    isSelected === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelected === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelected("nao")}
              >
                <Text
                  style={
                    isSelected === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {exams.map((exam, index) => (
            <View key={index}>
              <TextInput
                style={styles.input}
                multiline
                numberOfLines={5}
                placeholder="Descrição:"
                value={exam.description}
                onChangeText={(text) => {
                  const newExams = [...exams];
                  newExams[index].description = text;
                  setExams(newExams);
                }}
              />
              <TextInput
                style={styles.input}
                multiline
                numberOfLines={5}
                placeholder="Resultado de exames realizados:"
                value={exam.result}
                onChangeText={(text) => {
                  const newExams = [...exams];
                  newExams[index].result = text;
                  setExams(newExams);
                }}
              />
            </View>
          ))}

          <TouchableOpacity style={styles.buttonCirurgia} onPress={addExam}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>+</Text>
          </TouchableOpacity>

          {/* Doenças Concomitantes Anamnese */}
          <Text style={styles.subText}>Doenças Concomitantes:</Text>
          <View style={styles.checkboxContainer}>
            {/* DM */}
            <Text style={styles.label}>DM:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedDM === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedDM("sim")}
              >
                <Text
                  style={
                    isSelectedDM === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedDM === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedDM("nao")}
              >
                <Text
                  style={
                    isSelectedDM === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* HAS */}
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>HAS:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedHAS === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedHAS("sim")}
              >
                <Text
                  style={
                    isSelectedHAS === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedHAS === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedHAS("nao")}
              >
                <Text
                  style={
                    isSelectedHAS === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Outros:"
            multiline
            numberOfLines={5}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>3 - Antecedentes Familiares:</Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>4 - Patologias Associadas:</Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>5 - Antropometria:</Text>
          <TextInput style={styles.input} placeholder="Peso:"></TextInput>
          <TextInput style={styles.input} placeholder="Altura:"></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>6 - Estado Geral:</Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>7 - Independencia de Locomoção:</Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>8 - Exames Fisicos</Text>
          <Text style={styles.subText}>Dados Vitais</Text>
          <TextInput style={styles.input} placeholder="PA:"></TextInput>
          <TextInput style={styles.input} placeholder="FC:"></TextInput>
          <TextInput style={styles.input} placeholder="FR:"></TextInput>
          <TextInput style={styles.input} placeholder="AP:"></TextInput>
          <TextInput style={styles.input} placeholder="SpO2:"></TextInput>
          <TextInput style={styles.input} placeholder="Temp:"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Exames Especificos:"
            multiline
            numberOfLines={5}
          ></TextInput>

          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>Tonus Muscular:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkboxTonus,
                  isSelectedTonusM === "normal"
                    ? styles.checked
                    : styles.unchecked,
                ]}
                onPress={() => setIsSelectedTonusM("normal")}
              >
                <Text
                  style={
                    isSelectedTonusM === "normal"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  NORMAL
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkboxTonus,
                  isSelectedTonusM === "alterado"
                    ? styles.checked
                    : styles.unchecked,
                ]}
                onPress={() => setIsSelectedTonusM("alterado")}
              >
                <Text
                  style={
                    isSelectedTonusM === "alterado"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  ALTERADO
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput style={styles.input} placeholder="Tipo:"></TextInput>
          <TextInput style={styles.input} placeholder="Grau:"></TextInput>
          <TextInput style={styles.input} placeholder="Local:"></TextInput>

          <TextInput
            style={styles.input}
            multiline
            numberOfLines={5}
            placeholder="Distribuição topografica:"
          ></TextInput>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={5}
            placeholder="Percepção:"
          ></TextInput>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={5}
            placeholder="Coordenação Dinamica e Estatica:"
          ></TextInput>

          <Text style={styles.subText}>Reflexos Profundos</Text>
          <View style={styles.checkboxContainer}>
            {/* Tricipital */}
            <Text style={styles.label}>Triciptal:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedTri === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedTri("sim")}
              >
                <Text
                  style={
                    isSelectedTri === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedTri === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedTri("nao")}
              >
                <Text
                  style={
                    isSelectedTri === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            {/* Bicipital */}
            <Text style={styles.label}>Bicipital:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedBic === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedBic("sim")}
              >
                <Text
                  style={
                    isSelectedBic === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedBic === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedBic("nao")}
              >
                <Text
                  style={
                    isSelectedBic === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            {/* Radial */}
            <Text style={styles.label}>Radial:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedRad === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedRad("sim")}
              >
                <Text
                  style={
                    isSelectedRad === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedRad === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedRad("nao")}
              >
                <Text
                  style={
                    isSelectedRad === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            {/* Patelar */}
            <Text style={styles.label}>Patelar:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedPat === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedPat("sim")}
              >
                <Text
                  style={
                    isSelectedPat === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedPat === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedPat("nao")}
              >
                <Text
                  style={
                    isSelectedPat === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            {/* Calcanear */}
            <Text style={styles.label}>Calcanear:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedCal === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedCal("sim")}
              >
                <Text
                  style={
                    isSelectedCal === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedCal === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedCal("nao")}
              >
                <Text
                  style={
                    isSelectedCal === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.subText}>Reflexos Superficiais</Text>
          <View style={styles.checkboxContainer}>

            {/* Calcanear */}
            <Text style={styles.label}>Cutaneo Abdominal:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedCuAb === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedCuAb("sim")}
              >
                <Text
                  style={
                    isSelectedCuAb === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedCuAb === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedCuAb("nao")}
              >
                <Text
                  style={
                    isSelectedCuAb === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            {/* Calcanear */}
            
            <Text style={styles.label}>Cultaneo Plantar:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedCuPla === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedCuPla("sim")}
              >
                <Text
                  style={
                    isSelectedCuPla === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedCuPla === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedCuPla("nao")}
              >
                <Text
                  style={
                    isSelectedCuPla === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            {/* Calcanear */}
            <Text style={styles.label}>Contraturas e deformidades:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedCon === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedCon("sim")}
              >
                <Text
                  style={
                    isSelectedCon === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedCon === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedCon("nao")}
              >
                <Text
                  style={
                    isSelectedCon === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            {/* Calcanear */}
            <Text style={styles.label}>Ulceras:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedUlc === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedUlc("sim")}
              >
                <Text
                  style={
                    isSelectedUlc === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedUlc === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedUlc("nao")}
              >
                <Text
                  style={
                    isSelectedUlc === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={5}
            placeholder="Local Ulcera:"
          ></TextInput>

          <View style={styles.checkboxContainer}>
            {/* Calcanear */}
            <Text style={styles.label}>Deambula:</Text>
            <View style={styles.checkInput}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedDeam === "sim" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedDeam("sim")}
              >
                <Text
                  style={
                    isSelectedDeam === "sim"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  S
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  isSelectedDeam === "nao" ? styles.checked : styles.unchecked,
                ]}
                onPress={() => setIsSelectedDeam("nao")}
              >
                <Text
                  style={
                    isSelectedDeam === "nao"
                      ? styles.checkedText
                      : styles.uncheckedText
                  }
                >
                  N
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={5}
            placeholder="Descrição Deambula:"
          ></TextInput>

          <TextInput
            style={styles.input}
            multiline
            numberOfLines={5}
            placeholder="Inspeção:"
          ></TextInput>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={5}
            placeholder="Palpação:"
          ></TextInput>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={5}
            placeholder="Mensuração:"
          ></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>9 - Força Muscular</Text>
          {muscleGroups.map((group, index) => (
            <View key={index}>
              <TextInput
                style={styles.input}
                placeholder="Musculo/Grupo:"
                value={group.muscle}
                onChangeText={(text) => {
                  const newMuscleGroups = [...muscleGroups];
                  newMuscleGroups[index].muscle = text;
                  setMuscleGroups(newMuscleGroups);
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Grau:"
                value={group.grade}
                onChangeText={(text) => {
                  const newMuscleGroups = [...muscleGroups];
                  newMuscleGroups[index].grade = text;
                  setMuscleGroups(newMuscleGroups);
                }}
              />
            </View>
          ))}
          <TouchableOpacity style={styles.button} onPress={addMuscleGroup}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Section ADM */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>10 - ADM</Text>
          {movements.map((movement, index) => (
            <View key={index}>
              <TextInput
                style={styles.input}
                placeholder="Movimento:"
                value={movement.movimento}
                onChangeText={(text) => {
                  const newMovements = [...movements];
                  newMovements[index].movimento = text;
                  setMovements(newMovements);
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Ativa:"
                value={movement.ativa}
                onChangeText={(text) => {
                  const newMovements = [...movements];
                  newMovements[index].ativa = text;
                  setMovements(newMovements);
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Passiva:"
                value={movement.passiva}
                onChangeText={(text) => {
                  const newMovements = [...movements];
                  newMovements[index].passiva = text;
                  setMovements(newMovements);
                }}
              />
            </View>
          ))}
          <TouchableOpacity style={styles.button} onPress={addMovement}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>11 - Complementos</Text>
          <TextInput
            style={styles.input}
            placeholder="Sensibilidade:"
          ></TextInput>
          <TextInput style={styles.input} placeholder="Dor: 0 a 10"></TextInput>
          <TextInput style={styles.input} placeholder="Clonus:"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Reflexos e Reações:"
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Ausculta Cardiaca:"
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Testes Especiais:"
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Avaliação Funcional:"
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Observações:"
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Exames Complementares/Laudos:"
          ></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>12 - Objetivos Fisioterapeutico</Text>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={5}
            placeholder="Descrição objetivo fisioterapeutico/ Objetivo do tratamento:"
          ></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>13 - Condutas Fisioterapeuticas</Text>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={5}
            placeholder="Descrição conduta fisioterapeutica/ Condutas:"
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Finalizar Prontuario
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ddd",
    marginTop: 35,
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 8,
  },
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    padding: 30,
    textAlign: "center",
    backgroundColor: "#00005D",
    color: "#FFF",
  },
  section: {
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontStyle: "italic",
    fontWeight: "light",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    fontStyle: "italic",
    fontWeight: "light",
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 10,
  },
  checkInput: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontStyle: "italic",
  },
  checkbox: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 4,
  },
  checked: {
    backgroundColor: "#00005d",
  },
  unchecked: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
  },
  checkedText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  uncheckedText: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold",
  },
  checkboxTonus: {
    width: 80,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
  },
  button: {
    width: "100%",
    backgroundColor: "#0000d5",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 5,
  },
  buttonCirurgia: {
    width: "100%",
    backgroundColor: "#0000d5",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default Prontuario;
