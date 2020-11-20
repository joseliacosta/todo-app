import React, { useState, useEffect } from 'react'
import * as S from './styles'
import Filter from '../Filter'
import Form from '../Form'
import { Tasks } from '../Tasks'
import { filterTodos } from '../../utils'

const App = () => {
  const [todos, setTodos] = useState([
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
  const [filteredTodos, setFilter] = useState(todos)

  const categories = [...new Set(todos.map((item) => item.category))]

  useEffect(() => {
    setFilter(todos)
  }, [todos])

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const addTodo = (text, category) => {
    const newTodos = [...todos, { text: text, category: category }]
    setTodos(newTodos)
  }

  const filterByCategory = (category) => {
    let filteredList = []
    console.log(category)
    if (category === 'All' || category === 'Filter by') {
      console.log(category)
      setFilter(todos)
    } else {
      filteredList = filterTodos(todos, category)
      setFilter(filteredList)
    }
  }

  return (
    <S.Container>
      <S.Header>
        <h1>To do list</h1>
        <Filter options={categories} onChange={filterByCategory} />
      </S.Header>
      <Tasks list={filteredTodos} completeTodo={completeTodo}></Tasks>
      <Form addTodo={addTodo} />
    </S.Container>
  )
}

export default App
