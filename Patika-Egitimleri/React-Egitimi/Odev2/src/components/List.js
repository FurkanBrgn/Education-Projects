function List({todos,setTodos,filter}) {
  
  const completedTodo = (todoId) => {
    let newTodos = todos.map((todo) => {
      if (parseInt(todo.id) === parseInt(todoId)) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (todoId) => {
    setTodos(
      todos.filter((todo) => parseInt(todo.id) !== parseInt(todoId))
    );
  };

  const isCompleted = (todo) => {
    if (todo.completed && filter === "All") {
      return "completed";
    } else if (todo.completed && filter === "Active") {
      return "completed hidden";
    } else if (!todo.completed && filter === "Completed") {
      return "hidden";
    }
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todo)=> 
          <li key={todo.id} className={isCompleted(todo)}>
            <div className="view">
              <input 
                className="toggle"
                type="checkbox"
                defaultChecked={todo.completed}
                onClick={()=>completedTodo(todo.id)}
              />
              <label>{todo.name}</label>
              <button 
                className="destroy"
                onClick={()=>deleteTodo(todo.id)}
              ></button>
            </div>
          </li>
        )}
      </ul>
    </section>
  );
}

export default List;
