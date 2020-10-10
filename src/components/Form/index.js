import React from 'react'
import Filter from '../Filter'

function Form(props) {
  return (
    <div>
      <button>+</button>
      <input type="text" placeholder="Write a task" value={props.description} />
      <input type="text" placeholder="Category" value={props.category} />
    </div>
  )
}

export default Form
