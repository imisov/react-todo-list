import { useId } from "react";
import * as s from "./TodoItem.module.css";

export default function TodoItem({ text, completed }) {
  const inputId = useId();
  return (
    <li className={s.item}>
      <input
        id={inputId}
        className={completed ? s.checked : s.checkbox}
        type="checkbox"
        checked={completed}
        readOnly
      />
      <label className={s.text} htmlFor={inputId}>
        {text}
      </label>
    </li>
  );
}
