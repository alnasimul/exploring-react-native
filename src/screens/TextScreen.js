import React from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={styles.text}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <Text style={styles.text}>My password is {password}</Text>
      {
        password.length < 4 ? <Text style={{ textAlign: 'center', color: 'red' }}>Password must be 4 character</Text> : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: 'bold'
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
