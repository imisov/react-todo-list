import Header from "./components/Header/Header";
import NewTask from "./components/NewTask/NewTask";
import TodoList from "./components/TodoList/TodoList";

export default function App() {
  return (
    <div className="container">
      <Header title="Мой Todo List" />
      <main className="main">
        <NewTask />
        <TodoList
          todos={[
            { id: 1, text: "Изучить React", completed: true },
            { id: 2, text: "Создать приложение", completed: false },
            { id: 3, text: "Развернуть на сервере", completed: false },
          ]}
        />
      </main>
    </div>
  );
}
