import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteTodos, updateTodosIscomplete } from '../Redux/TodosSlice';
import {AiFillCheckSquare} from "react-icons/ai"
const Todo = () => {
  const [edit, setEdit] = useState({
    id: null,
    text: '',
    parentID:null,
    isComplete:false
  });

  const submitUpdate = value => {
    //updateTodo(edit.id, value);
    setEdit({
      id: null,
      text: '',
      parentID:null,
      isComplete:false
    });
  };
  const dispatch=useDispatch()

  const deleteTodo=(id)=>{
    dispatch(DeleteTodos(id))
  }
  const Todos=useSelector(state=>state.todos.todos)
  
 const completetodo=(obj)=>{
   //let e=obj.isComplete
  dispatch(updateTodosIscomplete({...obj,isComplete:!obj.isComplete}))
 }
 
  if (edit.id) {
    return <TodoForm  edit={edit} submitUpdate={submitUpdate} />;
  }
 
  return Todos.map((td) => (
    <div
      className={td.isComplete ? 'todo-row complete' :'todo-row'} key={td.id}  >
    
      <div key={td.id} >
        {td.text}
      </div>
      <div className='icons'>
        <AiFillCheckSquare  onClick={() => completetodo(td)}/>
        <RiCloseCircleLine
          onClick={() => deleteTodo(td.id)}
        />
        <TiEdit
          onClick={() => setEdit({  id:td.id,parentID:td.parentID,text: td.text })}

        />
      </div>
    </div>
  
  ));
};

export default Todo;
