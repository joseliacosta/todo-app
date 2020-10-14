import React, { useState } from 'react'
import styled from 'styled-components'
const StyledForm = styled.form`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  max-width: 640px;

  input {
    &:last-child {
      margin-right: 0;
    }
  }
`
const InputText = styled.input`
  background: #fff;
  border-radius: 3px;
  border: 1px solid #ebebeb;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  color: #7e7e7e;
  font-size: 16px;
  height: 32px;
  padding: 4px 12px;
  margin-right: 6px;
  box-sizing: border-box;
`

const Button = styled.button`
  color: #ffffff;
  background: #f8558e;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  height: 32px;
  padding: 4px 12px;
  box-sizing: border-box;
  margin-right: 6px;
  cursor: pointer;
  &:hover {
    background: #cc2560;
  }
`

const Form = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(value, category)
    setValue('')
    setCategory('')
  }

  return (
    <StyledForm onSubmit={handleSubmit} data-testid="form">
      <Button type="submit">Add</Button>
      <InputText
        type="text"
        placeholder="Type a new task here"
        value={value}
        data-testid="input-add-task"
        onChange={(e) => setValue(e.target.value)}
      />

      <InputText
        type="text"
        placeholder="Category"
        className="input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
    </StyledForm>
  )
}

export default Form
