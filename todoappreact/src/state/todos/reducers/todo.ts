import { Todo, TodoStatus } from "./../Todo";
interface Action {
  type: string,
  id: string,
  title: string
}
const todos = (state: { todos: Todo[] }, action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: action.id,
            title: action.title,
            status: TodoStatus.NEW
          }
        ]
      }
    case 'MARK_DONE':
      return {
        todos: state.todos.map(todo =>
          (todo.id === action.id)
            ? { ...todo, status: TodoStatus.DONE }
            : todo
        )
      }
    case 'REMOVE_ITEM':
      return {
        todos: state.todos.filter(todo =>
          (todo.id !== action.id)
        )
      }
    case 'MARK_ALL':
      return {
        todos: state.todos.map(todo => {
          return { ...todo, status: TodoStatus.DONE }
        }
        )
      }
    default:
      return state
  }
}

export default todos