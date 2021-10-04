import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";


const ListScreen = () => {
  const friends = [
      { name: "Friend #1", age: 30 },
      { name: "Friend #2", age: 27 },
      { name: "Friend #3", age: 25 },
      { name: "Friend #4", age: 23 },
      { name: "Friend #5", age: 43 },
      { name: "Friend #6", age: 33 },
      { name: "Friend #7", age: 34 },
      { name: "Friend #8", age: 35 },
      { name: "Friend #9", age: 26 },
      { name: "Friend #10", age: 23 },
    ];
  return(
    <FlatList showsHorizontalScrollIndicator={false} keyExtractor={friend => friend.name} data={friends} renderItem={({item, index}) => {
       return <Text style={styles.textStyle}>{item.name}  -  Age: {item.age}</Text>
    }}/>
   );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    marginBottom:30,
    color: "purple",
  },
});

export default ListScreen;
