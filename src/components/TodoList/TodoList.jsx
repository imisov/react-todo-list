import TodoItem from "../TodoItem/TodoItem";
import * as s from "./TodoList.module.css";

export default function TodoList({ todos }) {
  return (
    <section className={s.section}>
      {todos.length === 0 ? (
        <p className={s.empty}>Задач нет!</p>
      ) : (
        <ul className={s.list}>
          {todos.map((task) => (
            <TodoItem
              key={task.id}
              text={task.text}
              completed={task.completed}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
