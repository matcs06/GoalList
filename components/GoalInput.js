import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TextInput, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = enterText => {
    setEnteredGoal(enterText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.botao}>
          <View style={styles.CancellBotton}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.AddBottom}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderBottomColor: "blue",
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 10,
    marginBottom: 5
  },
  botao: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: "60%"
  },

  CancellBotton: {
    width: "40%"
  },

  AddBottom: {
    width: "40%"
  }
});

export default GoalInput;
