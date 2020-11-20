import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '.'

test('renders app title', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/To do/i)
  expect(linkElement).toBeInTheDocument()
})

test('filter by category', () => {
  render(<App />)

  expect(screen.getByRole('list').children.length).toBe(4)
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'home' } })
  expect(screen.getByRole('list').children.length).toBe(1)
})
