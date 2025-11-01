import { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import SearchBar from "./components/SearchBar/SearchBar";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import TodoList from "./components/TodoList/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskManager from "./utils/TaskManager";

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("all");

  const taskManagerRef = useRef();

  if (!taskManagerRef.current) {
    taskManagerRef.current = new TaskManager(todos, setTodos);
  }

  useEffect(() => {
    if (taskManagerRef.current) {
      taskManagerRef.current.updateTodos(todos);
    }
  }, [todos]);

  const taskManager = taskManagerRef.current;

  const searchTodos = (text) => {
    setSearchText(text);
  };

  const searchedTodos = searchText
    ? todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchText.toLowerCase())
      )
    : todos;

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const displayedTodos = (() => {
    switch (filter) {
      case "active":
        return searchedTodos.filter((todo) => !todo.completed);
      case "completed":
        return searchedTodos.filter((todo) => todo.completed);
      default:
        return searchedTodos;
    }
  })();

  useEffect(() => {
    const activeCount = todos.filter((todo) => !todo.completed).length;
    document.title = `Todo List (${activeCount} активных)`;
  }, [todos]);

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="container">
      <Header title="Мой Todo List" />
      <main className="main">
        <TodoForm onAddTodo={taskManager.addTodo.bind(taskManager)} />
        <section className="todos">
          <h2>Мои задачи</h2>
          <SearchBar onSearch={searchTodos} />
          <TodoFilter filter={filter} onChange={handleFilterChange} />
          <button className="clear" onClick={clearCompleted}>
            Очистить выполненные
          </button>
          <TodoList
            todos={displayedTodos}
            toggleTodo={taskManager.toggleTodo.bind(taskManager)}
            deleteTodo={taskManager.deleteTodo.bind(taskManager)}
            editTodo={taskManager.editTodo.bind(taskManager)}
          />
        </section>
      </main>
    </div>
  );
}
