
import React from 'react';
import {useSelector } from 'react-redux';
import './App.scss';
import TodoList from "./components/TodoList"
function App() {
  const darkTheme=useSelector(state=>state.todos.darkTheme)
  return (
    <div className={darkTheme?'todo-app dark':'todo-app'}>
    <TodoList darkTheme={darkTheme} />
  </div>
  ); 
}


export default App;
