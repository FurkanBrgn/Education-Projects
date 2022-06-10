import { useState } from "react";

function Header({todos,setTodos}) {
  const [newTodo,setNewTodo]=useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTodo !== "") {
      setTodos([...todos,{id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,name:newTodo,completed: false}]);
      setNewTodo("");
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    return;
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={newTodo}
          onChange={(e)=>setNewTodo(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
