import React from "react";

const TodoContext = React.createContext();

export const TodoProvider = ({ children }) => {
  return <TodoContext.Provider value={5}>{children}</TodoContext.Provider>;
};

export default TodoContext;
