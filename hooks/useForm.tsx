import { ChangeEvent, MouseEvent, useState } from 'react'

export const useForm = (callback: any, initialState: any) => {
  const [value, setValue] = useState(initialState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue({ ...value, [e.target.name]: e.target.value })

  const onSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    callback()
    setValue(initialState)
  }

  return {
    value,
    onChange,
    onSubmit,
  }
}