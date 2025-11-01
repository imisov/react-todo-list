import { useState } from "react";
import * as s from "./TodoForm.module.css";

export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText("");
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <section className={s.section}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Введите новую задачу..."
        />
        <button className={s.button} type="submit">
          Добавить
        </button>
      </form>
    </section>
  );
}
