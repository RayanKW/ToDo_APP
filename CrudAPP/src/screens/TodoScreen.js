import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

const TodoScreen = () => {
  const ab = useContext(TodoContext);
  console.log(ab);
  return (
    <View>
      <Text>TodoScreen</Text>
      <Text>{ab}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default TodoScreen;
