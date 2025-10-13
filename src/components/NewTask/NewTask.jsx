import { useId, useState } from "react";
import * as s from "./NewTask.module.css";

export default function NewTask() {
  const inputId = useId();
  const [value, setValue] = useState("");
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section className={s.section}>
      <form className={s.form}>
        <input
          id={inputId}
          className={s.input}
          type="text"
          value={value}
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
