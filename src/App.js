import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const onTodoSubmit = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const onTodoDelete = deleteIndex => {
    const newTodos = todos.filter((_, index) => index !== deleteIndex);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Header />
      <TodoForm onSubmit={onTodoSubmit} />
      <TodoList todos={todos} deleteTodo={onTodoDelete} />
    </div>
  );
}

export default App;
