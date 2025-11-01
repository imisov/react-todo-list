export default class TaskManager {
    constructor(todos, setTodos) {
        this.todos = todos;
        this.setTodos = setTodos;
    }

    addTodo(text) {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
            createdAt: new Date(),
        };
        this.setTodos([...this.todos, newTodo]);
    }

    deleteTodo(id) {
        this.setTodos(this.todos.filter((todo) => todo.id !== id));
    };

    toggleTodo(id) {
        this.setTodos(
            this.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    editTodo(id, newText) {
        this.setTodos(
            this.todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
        );
    };

    updateTodos(todos) {
        this.todos = todos;
        this.setTodos(this.todos);
    };
}
