import TodoItem from "../TodoItem/TodoItem";
import * as s from "./TodoList.module.css";

export default function TodoList({ todos }) {
  if (todos.length === 0) {
    return (
      <section className={s.section}>
        <p className={s.empty}>Задач нет!</p>
      </section>
    );
  }

  return (
    <section className={s.section}>
      <ul className={s.list}>
        {todos.map((task) => (
          <TodoItem key={task.id} text={task.text} completed={task.completed} />
        ))}
      </ul>
    </section>
  );
}
