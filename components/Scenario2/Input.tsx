import { FC, ReactElement, useContext } from 'react'

import PlusIcon from '../Icons/PlusIcon'
import { Context } from '../../contexts/context'
import { useForm } from '../../hooks/useForm'

export const Input: FC = (): ReactElement => {
  const { add } = useContext(Context)

  const addCallback = () => add(value)

  const { onChange, onSubmit, value } = useForm(addCallback, {
    message: '',
    done: false,
  })

  return (
    <div className="flex flex-row justify-between items-stretch gap-8">
      <input
        className="w-full rounded-lg text-primary border-stack-4 focus:shadow-none focus:border-secondary focus:ring-0 bg-stack-3"
        type="text"
        id="message"
        name="message"
        placeholder="Add your new todo"
        value={value.message}
        onChange={onChange}
      />
      <button
        className="bg-stack-3 px-2 rounded-lg text-primary hover:opacity-80"
        onClick={onSubmit}
      >
        <PlusIcon />
      </button>
    </div>
  )
}