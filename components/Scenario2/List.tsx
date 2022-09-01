import { ReactElement } from 'react'

import { TodoInterface } from '../../interfaces'
import EditIcon from '../Icons/EditIcon'
import TrashIcon from '../Icons/TrashIcon'

export const List = (
  {
    todo,
    remove,
    mark,
  }: {
    todo: TodoInterface,
    remove: () => void
    mark: () => void
  }
): ReactElement => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="w-[22rem] flex flex-row gap-2 items-center">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-default focus:shadow-none focus:ring-0 mr-4"
          checked={todo.done}
          onChange={mark}
        />
        <div
          className={`text-primary truncate ${todo.done ? 'line-through' : ''}`}
        >
          {todo.message}
        </div>
      </div>
      <div>
        <button
          className="px-2 rounded-lg text-default hover:opacity-80"
          onClick={() => console.log("EDIT CLICKED.")}
        >
          <EditIcon />
        </button>
        <button
          className="px-2 rounded-lg text-red-600 hover:opacity-80"
          onClick={remove}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}