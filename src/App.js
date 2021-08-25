import "./styles.css";

export default function App() {
  const todos = [
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ];

  return (
    <div className="App">
      <h1>To-do List</h1>

      <TodoList todos={todos} />
      <AddTodo />
    </div>
  );
}
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

function AddTodo() {
  function handleAddTodo(event) {
    event.preventDefault(); //impede o refresh da página ao submeter o formulário
  }
  return (
    <form onSubmit={handleAddTodo}>
      <input placeholder="add To-do" />
      <button type="submit">Submit</button>
    </form>
  );
}
