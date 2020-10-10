import React from 'react'
import styled from 'styled-components'

const StyledTasks = styled.ul`
  list-style: none;
`
const Items = styled.li`
  display: flex;
  align-items: center;
  min-height: 50px;
  border-bottom: 1px solid #ebebeb;
  input[type='checkbox'] {
    margin-right: 12px;
  }
`
const Tasks = (props) => {
  const { list } = props
  return (
    <StyledTasks>
      {list.map((item) => {
        return (
          <Items key={`${item}--task`}>
            <input type="checkbox" />
            {item}
          </Items>
        )
      })}
    </StyledTasks>
  )
}

export default Tasks
