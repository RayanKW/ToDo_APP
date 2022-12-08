import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoScreen from "./src/screens/TodoScreen";
// import TodoContext from "./src/context/TodoContext";
import { TodoProvider } from "./src/context/TodoContext";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="Todo">
      <Stack.Navigator>
        <Stack.Screen name="Todo" component={TodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default () => {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
};
