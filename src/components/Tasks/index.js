import React from 'react'
import * as S from './styles'
import Task from '../Task'

const Tasks = (props) => {
  const { list, completeTodo } = props

  return (
    <S.Tasks>
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
    </S.Tasks>
  )
}

export { Tasks }
