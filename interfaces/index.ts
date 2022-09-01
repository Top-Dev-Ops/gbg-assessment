export type TodoInterface = {
  message: string
  done: boolean
}

export interface ContextInterface {
  todos: TodoInterface[],
  add: (data: TodoInterface) => void,
  clearAll: () => void,
  remove: (data: string) => void,
  mark: (data: string) => void,
}
