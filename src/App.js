import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Filter from './components/Filter'
import Form from './components/Form'
import { Tasks } from './components/Tasks'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid red;
  @media screen and (min-width: 720px) {
    max-width: 640px;
  }
`
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`
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
      filteredList = todos.filter((todo) => todo.category === category)
      setFilter(filteredList)
    }
  }

  return (
    <Container>
      <Header>
        <h1>To do list</h1>
        <Filter options={categories} onChange={filterByCategory} />
      </Header>
      <Tasks list={filteredTodos} completeTodo={completeTodo}></Tasks>
      <Form addTodo={addTodo} />
    </Container>
  )
}

export default App
