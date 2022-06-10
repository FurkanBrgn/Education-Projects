import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos"))|| []
  );
  const [filter, setFilter] = useState("All");

  return (
    <section className="todoapp">
      <Header todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} filter={filter} />
      <Footer todos={todos} setTodos={setTodos} setFilter={setFilter} />
    </section>
  );
}

export default App;
