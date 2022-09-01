import { createContext, useReducer } from 'react'
import { ContextInterface, TodoInterface } from '../interfaces'

const Context = createContext<ContextInterface>({
  todos: [],
  add: () => {},
  clearAll: () => {},
  remove: () => {},
  mark: () => {}
})

const reducers = (state: Omit<ContextInterface, "add">, action: any) => {
  switch (action.type) {
    case 'ADD':
      return {
        todos: state.todos.concat(action.payload)
      }
    case 'CLEAR_ALL':
      return {
        todos: []
      }
    case 'REMOVE':
      return {
        todos: state.todos.filter(todo => todo.message !== action.payload)
      }
    case 'MARK':
      return {
        todos: state.todos.map(todo => todo.message !== action.payload ? todo : {
          ...todo,
          done: !todo.done
        })
      }
    default:
      return state
  }
}

function ContextProvider(props: any) {
  const [state, dispatch] = useReducer(reducers, { todos: [] })

  const add = (data: TodoInterface) => dispatch({ type: 'ADD', payload: data })

  const clearAll = () => dispatch({ type: 'CLEAR_ALL' })

  const remove = (data: string) => dispatch({ type: 'REMOVE', payload: data })

  const mark = (data: string) => dispatch({ type: 'MARK', payload: data })

  return (
    <Context.Provider
      value={{
        todos: state.todos,
        add,
        clearAll,
        remove,
        mark
      }}
      {...props}
    />
  )
}

export { Context, ContextProvider }