/* eslint-disable default-case */
// Watch older videos on props and state
import React, { useState, useEffect } from "react";
import './App.css';
// Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // function allows us to change value
  // I want to change the state's value
  // This will update the inputText
  // This is the variable we inject data into
  // This is where our state is
  // Pass from ToDoList to Todo
  // STATE STUFF
  const [inputText, setInputText] = useState("");
  // We are going to have an array of objects here;
  const [todos, setTodos] = useState([]);
  // default status
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  // RUN ONCE
  useEffect(() => {
    getLocalTodos();
  }, []);

  // USE EFFECT
  // The empty array means that the arrow function runs only once when the component is first rendered
  useEffect(() => {
    saveLocalTodos();
    filterHandler();
  }, [todos, status])

  // FUNCTIONS
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // Save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
     let todoLocal =  JSON.parse(localStorage.getItem('todos'));
     setTodos(todoLocal);
    }
  }
  return (
    // JavaScript 'class' keyword is reserved
    <div className="App">
      <header>
        <h1>Gulu-Gulu To-Do List </h1>
      </header>
      {/* Props / this is the state below */}
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      {/* Pass this down to the ToDo list */}
      <TodoList  filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
