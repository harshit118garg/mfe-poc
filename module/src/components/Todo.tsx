// These are resolved from host-app's shared scope via Module Federation
// @ts-ignore — resolved at runtime via MF
import { Button, commonFunctions } from "shell/shared";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input.trim(),
        completed: false,
        createdAt: commonFunctions.formatDate(new Date()),
      },
    ]);
    setInput("");
  };

  const toggleTodo = (id: number) => setTodos(todos.map((t: Todo) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTodo = (id: number) => setTodos(todos.filter((t: Todo) => t.id !== id));

  return (
    <>
      <div>
        <h2>Todo List (Remote Module)</h2>

        <div style={{ display: "flex", gap: "8px", marginBottom: "1rem" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="Add a todo..."
            style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #d1d5db" }}
          />
          <Button label="Add" onClick={addTodo} />
        </div>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo: Todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px",
                marginBottom: "8px",
                borderRadius: "6px",
                background: "#f9fafb",
              }}
            >
              <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
              <span style={{ flex: 1, textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
              <small style={{ color: "#9ca3af" }}>{todo.createdAt}</small>
              <Button label="X" onClick={() => deleteTodo(todo.id)} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
