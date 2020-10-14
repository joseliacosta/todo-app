import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  margin-bottom: 6px;
`
const StyledFilter = styled.select`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #ebebeb;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  color: #7e7e7e;
  font-size: 16px;
  height: 32px;
  margin-bottom: 6px;
`
const Filter = (props) => {
  const { options } = props
  return (
    <>
      <Label>Filter by</Label>
      <StyledFilter onChange={(event) => props.onChange(event.target.value)}>
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
    </>
  )
}

export default Filter
