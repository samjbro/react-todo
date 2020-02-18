import React from "react";

const Todo = ({ label, onDelete }) => {
  return (
    <li>
      <span>{label}</span>
      <span onClick={onDelete} className="todo__delete">
        X
      </span>
    </li>
  );
};

export default ({ todos, deleteTodo }) => (
  <ul>
    {todos.map((todo, i) => (
      <Todo label={todo} key={`Todo-${i}`} onDelete={() => deleteTodo(i)} />
    ))}
  </ul>
);
