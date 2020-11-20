import styled from 'styled-components'

export const Task = styled.li`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #ebebeb;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  color: #7e7e7e;
  font-size: 16px;
  height: 32px;
  margin-bottom: 6px;
  padding: 12px;

  input[type='checkbox'] {
    margin-right: 12px;
  }
`
export const Description = styled.span`
  text-decoration: ${(props) => props.isCompleted && 'line-through'};
`
export const Category = styled.label`
  font-weight: 700;
  color: #ffffff;
  background: #5846f6;
  border-radius: 4px;
  padding: 5px;
  margin-left: auto;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
`
