import { ReactElement } from 'react'

export const Footer = (
  {
    pending,
    clearAll,
  }: {
    pending: number,
    clearAll: () => void
  }
): ReactElement => {
  return (
    <div className="flex flex-row justify-between items-center mt-20">
      <div className="text-primary">
        You have {pending} pending tasks
      </div>
      <button
        className="bg-red-600 text-primary px-5 py-2 hover:opacity-90 rounded-lg"
        onClick={clearAll}
      >
        Clear All
      </button>
    </div>
  )
}