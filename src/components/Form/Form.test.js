import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Form from '.'

test('renders inputs and button inside form', () => {
  render(<Form />)
  expect(screen.queryAllByRole('textbox').length).toEqual(2)
  expect(screen.getByRole('button')).toBeVisible()
})
