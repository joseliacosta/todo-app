import React from 'react'
import Filter from './components/Filter'
import { Tasks } from './components/Tasks'

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'Learn about React',
      category: 'work',
      isCompleted: false,
    },
    {
      text: 'Do laundry',
      category: 'home',
      isCompleted: false,
    },
    {
      text: 'Build really cool todo app',
      category: 'work',
      isCompleted: false,
    },
    {
      text: 'Meditation',
      category: '',
      isCompleted: false,
    },
  ])

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <header className="App-header">
        <h1>To do list</h1>
        <Filter />
      </header>
      <main>
        <Tasks list={todos} completeTodo={completeTodo}></Tasks>
      </main>
    </div>
  )
}

export default App
