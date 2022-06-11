import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetTodos, UpdateTodos } from '../Redux/TodosSlice';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.text : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
 
  const handleChange = e => {
    setInput(e.target.value);
  };

  const dispatch=useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(SetTodos({
      id:Math.floor(Math.random() * 10000),
      parentID:Math.floor(Math.random() * 10000),
      text: input,
      isComplete:false,
    }))
    setInput('');
  };
  const darkTheme=useSelector(state=>state.todos.darkTheme)
 
 
  const update=(e,text)=>{
    e.preventDefault()
    dispatch(UpdateTodos({...props.edit,text:text}))
    props.submitUpdate()
  }
  
  return (
    <form className='todo-form'>
      
      {props.edit ? (
        <>
        <span>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className={!darkTheme?'todo-input edit':"todo-input edit dark"}
          />
          <button onClick={(e)=>update(e,input)} className='todo-button edit'>
            Update
          </button>
          </span>
        </>
      ) : (
        <>
        <span>
          <input
            placeholder='Добавьте заметку'
            value={input}
            onChange={handleChange}
            name='text'
            className={!darkTheme?'todo-input':"todo-input  dark"}
            ref={inputRef}
          />
          <button onClick={handleSubmit} disabled={input===""} className='todo-button'>
            Добавить
          </button>
          </span>
        </>
      )}
    </form>
  );
}

export default TodoForm;
