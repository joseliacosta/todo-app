import React from 'react'
import * as S from './styles'
const Task = (props) => {
  const { todo, index, completeTodo } = props
  return (
    <S.Task>
      <input type="checkbox" onClick={() => completeTodo(index)} />
      <S.Description isCompleted={todo.isCompleted}>{todo.text}</S.Description>
      {todo.category && <S.Category>{todo.category}</S.Category>}
    </S.Task>
  )
}

export default Task
