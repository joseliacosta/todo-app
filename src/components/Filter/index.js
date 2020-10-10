import React from 'react'
import styled from 'styled-components'

const StyledFilter = styled.select`
  border: 1px solid red;
`
const Filter = (props) => {
  return (
    <StyledFilter onChange={(event) => props.onChange(event.target.value)}>
      <option>Category</option>
      <option value="work">work</option>
      <option value="home">home</option>
    </StyledFilter>
  )
}

export default Filter
