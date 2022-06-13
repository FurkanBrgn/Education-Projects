import React,{useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import TodoCard from "./components/TodoCard";

const App = () => {
  const [newTodo, setNewTodo]= useState("");
  const [todos,setTodos]=useState([{"id":1,"name":"Deneme Todo 1","completed":false},{"id":2,"name":"Deneme Todo 2","completed":false}]);
  const activeTodos=todos.filter((item)=> !item.completed);

  const keyExtractor=(item)=>{
    return String(item.id);
  }

  const renderItem=({item})=>{
    return (
      <TodoCard todo={item} todos={todos} setTodos={setTodos} />
    );
  }

  const addTodo=()=>{
    setTodos([...todos,{"id":todos[todos.length-1].id+1,"name":newTodo,"completed":false}]);
    setNewTodo("");
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>
            Yapılacaklar
          </Text>
          <Text style={styles.title}>
            {activeTodos.length}
          </Text>
        </View>
        <FlatList keyExtractor={keyExtractor} data={todos} renderItem={renderItem} />
      </View>
      <View style={styles.footer}>
        <TextInput 
          style={styles.input}
          onChangeText={setNewTodo}
          value={newTodo}
          placeholder="Yapılacak..."
          placeholderTextColor="#808080"
        />
        <View style={styles.save}>
          <TouchableHighlight style={styles.save} onPress={addTodo} touchSoundDisabled>
            <View style={[styles.button, newTodo === "" && styles.disabledButton]}>
              <Text style={styles.buttonTitle}>Kaydet</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#102027",
    paddingHorizontal: 15,
    paddingVertical: 30,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title:{
    color: "#FFA500",
    fontWeight: "bold",
    fontSize: 35,
  },
  footer:{
    borderRadius: 10,
    backgroundColor: "#37474F",
    width: "100%",
    height: 120,
    padding: 13,
    paddingTop: 5,
  },
  input:{
    width: "100%",
    height: 40,
    color: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#78909C",
    marginBottom: 13,
  },
  save:{
    width:"100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  button:{
    width: "95%",
    height: 40,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFA500"
  },
  disabledButton:{
    backgroundColor: "#808080"
  },
  buttonTitle:{
    color: "#fff",
  }
});

export default App;
