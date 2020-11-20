import React from 'react'
import { render, screen } from '@testing-library/react'
import { Tasks } from '.'

test('render 5 items when component receive a list with size=5 from parent', () => {
  const mockList = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']
  render(<Tasks list={mockList} />)
  expect(screen.queryAllByRole('listitem').length).toEqual(5)
})
