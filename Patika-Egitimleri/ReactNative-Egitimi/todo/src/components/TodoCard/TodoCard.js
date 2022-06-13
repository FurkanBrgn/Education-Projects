import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "./TodoCard.style";

const TodoCard=({todo,todos,setTodos})=>{
  const onPress=()=>{
    const editedTodos=todos.map((item)=> item.id===todo.id ? {...todo, completed: !todo.completed} : item);
    setTodos(editedTodos);
  }

  return (
    <TouchableHighlight style={[styles.container,todo.completed && styles.completed]} onPress={onPress} touchSoundDisabled>
      <Text style={todo.completed ? styles.completedName : styles.name}>
        {todo.name}
      </Text>
    </TouchableHighlight>
  );
}

export default TodoCard;