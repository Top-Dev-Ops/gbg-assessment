import { NextPage } from 'next'
import { useContext } from 'react'

import Layout from '../components/Layout'
import { Input } from '../components/Scenario2/Input'
import { List } from '../components/Scenario2/List'
import { Footer } from '../components/Scenario2/Footer'

import { Context } from '../contexts/context'

const Scenario2: NextPage = () => {
  const { todos, remove, mark, clearAll } = useContext(Context)
  const pending = todos.reduce((acc, cur) => !cur.done ? acc++ : acc, 0)

  return (
    <Layout title="Scenario 2">
      <div className="w-full max-w-lg flex flex-col gap-8 mt-20 mobile:mt-0 p-8 bg-stack-2 rounded-lg">
        <h1 className="text-default text-2xl font-semibold text-left">Todo App</h1>

        <Input />

        {todos.map((todo, index) => (
          <List
            key={`todo_${index}`}
            todo={todo}
            remove={() => remove(todo.message)}
            mark={() => mark(todo.message)}
          />
        ))}

        <Footer
          pending={pending}
          clearAll={clearAll}
        />
      </div>
    </Layout>
  )
}

export default Scenario2
