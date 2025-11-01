import TodoItem from "../TodoItem/TodoItem";
import * as s from "./TodoList.module.css";

export default function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  if (todos.length === 0) {
    return <p className={s.empty}>Задач нет!</p>;
  }

  return (
    <ul className={s.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          text={todo.text}
          completed={todo.completed}
          toggleTodo={() => toggleTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}
