import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '.'

test('renders inputs and button inside form', () => {
  render(<Form />)
  expect(screen.getByTestId('input-add-task')).toBeVisible()
  expect(screen.getByRole('button')).toBeVisible()
})

test('Submit form when user fill input task', () => {
  const addTodoSpy = jest.fn()
  render(<Form addTodo={addTodoSpy} />)

  const form = screen.getByTestId('form')
  const inputTask = screen.getByTestId('input-add-task')

  userEvent.type(inputTask, 'Do something')
  fireEvent.submit(form)

  expect(addTodoSpy).toHaveBeenCalledTimes(1)
})

test('Do not submit form when user send input task empty', () => {
  const addTodo = jest.fn()
  render(<Form addTodo={addTodo} />)
  const form = screen.getByTestId('form')

  fireEvent.submit(form)

  expect(addTodo).toHaveBeenCalledTimes(0)
})
