import React, { useState } from 'react'

function Form({ addTodo }) {
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
    <form onSubmit={handleSubmit} data-testid="form">
      <input
        type="text"
        className="input"
        placeholder="Type a new task"
        value={value}
        data-testid="input-add-task"
        onChange={(e) => setValue(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        className="input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default Form
