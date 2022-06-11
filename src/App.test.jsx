import reducer, { DeleteTodos, SetTodos, ToggleDarkTheme, UpdateTodos, updateTodosIscomplete } from './Redux/TodosSlice'


test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
        todos:[],
        darkTheme:false,
    }
  )
})


test('should push todo in state', () => {
    const previousState = {
          todos:[],
      }
    
    expect(reducer(previousState, SetTodos({id:1,ParentID:1,text:"Write test",isCompled:true}))).toEqual({
          todos:[{
            id:1,
            ParentID:1,
            text:"Write test",
            isCompled:true
          }],
      }
    )
  })
  
  test('should delete todo in state', () => {
    const previousState = {
          todos:[{id:1},{id:2}],
      }
    expect(reducer(previousState, DeleteTodos(1))).toEqual({ 
          todos:[{id:2}],
      }
    )
  }) 

  test('should update todo in state', () => {
    const previousState = {
          todos:[{id:1,ParentID:1,text:"Write ",isCompled:true}],
      }
    
    expect(reducer(previousState, UpdateTodos({id:1,ParentID:1,text:"Write test",isCompled:true}))).toEqual({
          todos:[{
            id:1,
            ParentID:1,
            text:"Write test",
            isCompled:true 
          }],
      }
    )
  })

  test('should updatecomplete todo in state', () => {
    const previousState = {
          todos:[{id:1,ParentID:1,text:"Write test",isComplete:false}],
      }
    
    expect(reducer(previousState, updateTodosIscomplete({id:1,ParentID:1,text:"Write test",isComplete:true}))).toEqual({
          todos:[{
            id:1,
            ParentID:1,
            text:"Write test", 
            isComplete:true 
          }],
      }
    )
  })

test('should handle a todo being added to an existing list', () => {
  const previousState = {
        todos:[],
        darkTheme:false,
    }
  
  expect(reducer(previousState, ToggleDarkTheme())).toEqual(
       { todos:[],
        darkTheme:true,
    }
  )
})