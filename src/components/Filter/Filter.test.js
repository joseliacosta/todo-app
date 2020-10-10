import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Filter from './index'

test('renders learn react link', () => {
  render(<Filter />)

  expect(screen.getByText(/category/i)).toBeInTheDocument()
  expect(screen.getByText(/work/i)).toBeInTheDocument()
  expect(screen.getByText(/home/i)).toBeInTheDocument()
})

test('calls onChange function from parent', () => {
  const mockOnchange = jest.fn()

  render(<Filter onChange={mockOnchange} />)

  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'home' } })
  expect(mockOnchange).toHaveBeenCalled()
})
