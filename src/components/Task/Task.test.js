import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Task from '.'

test('Marks task as checked when checkbox is clicked', () => {
  const toDoMock = {
    text: 'Do laundry',
    category: 'home',
    isCompleted: false,
  }
  const completeTodoSpy = jest.fn()

  render(<Task todo={toDoMock} index={0} completeTodo={completeTodoSpy} />)

  fireEvent.click(screen.getByRole('checkbox'))

  expect(completeTodoSpy).toHaveBeenCalled()
})

test('Renders category label if task have one', () => {
  const completeTodoSpy = jest.fn()
  const toDoComplete = {
    text: 'Do laundry',
    category: 'home',
    isCompleted: false,
  }

  render(<Task todo={toDoComplete} index={0} completeTodo={completeTodoSpy} />)

  expect(screen.getByText('home')).toBeVisible()
})

test('Do not renders category label when task does not have one', () => {
  const completeTodoSpy = jest.fn()

  const toDoWithoutCategory = {
    text: 'Meditation',
    category: '',
    isCompleted: false,
  }

  render(
    <Task todo={toDoWithoutCategory} index={0} completeTodo={completeTodoSpy} />
  )

  expect(screen.queryByRole('label')).toBeNull()
})
