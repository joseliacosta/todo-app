import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Filter from './index'

test('renders filter with options', () => {
  const categoryListMock = [
    'category-1',
    'category-2',
    'category-3',
    'category-4',
    'category-5',
  ]
  render(<Filter options={categoryListMock} />)

  expect(screen.getByRole('combobox')).toBeInTheDocument()
})

test('calls onChange function from parent', () => {
  const mockOnchange = jest.fn()
  const mockCategories = ['work', 'home']

  render(<Filter options={mockCategories} onChange={mockOnchange} />)

  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'home' } })
  expect(mockOnchange).toHaveBeenCalled()
})
