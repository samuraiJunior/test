import { createSlice } from "@reduxjs/toolkit";



const TodosSlice=createSlice({
    name:"todos",
    initialState:{
        todos:[],
        darkTheme:false,
    },
    reducers:{
        SetTodos(state,action){
            state.todos.push(action.payload)
        },DeleteTodos(state,action){
            state.todos=state.todos.filter(td=>td.id!==action.payload)

        },UpdateTodos(state,action){
           state.todos=state.todos.map(item=>{
                if(item.id===action.payload.id){                                         /*state.todos.find(td=>td.id===action.payload.id)*/
                 return {...item,text:action.payload.text}
                }
                return item
                 })
        },updateTodosIscomplete(state,action){
            state.todos=state.todos.map(item=>{
                if(item.id===action.payload.id){
                   // console.log(action.payload)                                         /*state.todos.find(td=>td.id===action.payload.id)*/
                  //console.log({...item,isComplete:action.payload.isComplete})
                 return {...item,isComplete:action.payload.isComplete}
                }else{
                    return item
                }
                 })
        },
        ToggleDarkTheme(state){
            state.darkTheme=!state.darkTheme
        }
    },
})
export default TodosSlice.reducer
export const {ToggleDarkTheme,SetTodos,DeleteTodos,UpdateTodos,updateTodosIscomplete} = TodosSlice.actions