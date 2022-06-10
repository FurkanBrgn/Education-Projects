import { useEffect, useState } from "react";

function Footer({todos,setTodos,setFilter}) {
  const [completedTodos, setCompletedTodos] = useState(todos);
  const [select, setSelect] = useState("selected", "", "");

  useEffect(()=>{
    setCompletedTodos(todos.filter((check) => !check.completed));
  },[todos]);
  
  const clearCompleted=()=>{
    setTodos(todos.filter((todo)=> !todo.completed));
  }

  const selectedFilter = (filter) => {
    switch (filter) {
      case "All":
        setSelect(["selected", "", ""]);
        setFilter("All");
        break;
      case "Active":
        setSelect(["", "selected", ""]);
        setFilter("Active");
        break;
      case "Completed":
        setSelect(["", "", "selected"]);
        setFilter("Completed");
        break;
      default:
    }
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{completedTodos.length}</strong>
        {completedTodos.length > 1 ? " items left" : " item left"}
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className={select[0]} onClick={()=>selectedFilter("All")}>
            All
          </a>
        </li>
        <li>
          <a href="#/" className={select[1]} onClick={()=>selectedFilter("Active")}>Active</a>
        </li>
        <li>
          <a href="#/" className={select[2]} onClick={()=>selectedFilter("Completed")}>Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
}

export default Footer;
