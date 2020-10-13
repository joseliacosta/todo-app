import React from 'react'
import styled from 'styled-components'

const StyledFilter = styled.select`
  border: 1px solid red;
`
const Filter = (props) => {
  const { options } = props
  return (
    <StyledFilter onChange={(event) => props.onChange(event.target.value)}>
      <option>Filter by</option>
      <option>All</option>
      {options.map(
        (category, index) =>
          category && (
            <option key={index} value={category}>
              {category}
            </option>
          )
      )}
    </StyledFilter>
  )
}

export default Filter
