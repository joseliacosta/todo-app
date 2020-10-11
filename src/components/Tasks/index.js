import React from 'react'
import styled from 'styled-components'

const StyledTasks = styled.ul`
  list-style: none;
  max-width: 320px;
`

const Tasks = (props) => {
  const { list, completeTodo } = props

  return (
    <StyledTasks>
      {list.map((todo, index) => {
        return (
          <Task
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        )
      })}
    </StyledTasks>
  )
}

const StyledTask = styled.li`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #ebebeb;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  height: 32px;
  margin-bottom: 6px;
  padding: 12px;

  input[type='checkbox'] {
    margin-right: 12px;
  }
`
const Description = styled.span`
  text-decoration: ${(props) => props.isCompleted && 'line-through'};
`
const Category = styled.label`
  font-weight: 700;
  background: #ebebeb;
  border-radius: 4px;
  padding: 5px;
  margin-left: auto;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
`

const Task = ({ todo, index, completeTodo }) => {
  return (
    <StyledTask>
      <input type="checkbox" onClick={() => completeTodo(index)} />
      <Description isCompleted={todo.isCompleted}>{todo.text}</Description>
      {todo.category && <Category>{todo.category}</Category>}
    </StyledTask>
  )
}

export { Task, Tasks }
