import * as s from "./TodoFilter.module.css";

export default function TodoFilter({ filter, onChange }) {
  const handleFilterChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select className={s.filter} value={filter} onChange={handleFilterChange}>
      <option className="option" value="all">
        Все задачи
      </option>
      <option className="option" value="active">
        Активные
      </option>
      <option className="option" value="completed">
        Завершённые
      </option>
    </select>
  );
}
