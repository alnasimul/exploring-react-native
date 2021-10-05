import React from "react";
import { StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    alignItems: "flex-start",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
    height: 100,
    borderRadius: 5,
  },
  // textStyle: {
  //     borderWidth: 1,
  //     borderColor: 'red',
  //     padding: 5,
  //     borderRadius: 10,
  //     textAlign: 'center',
  //     fontWeight: 'bold'
  // },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
    backgroundColor: 'green'
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple'
  },
});
export default BoxScreen;
