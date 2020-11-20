import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: calc(100vw-40px);
  @media screen and (min-width: 667px) {
    max-width: 500px;
    margin: 0 auto;
  }
`
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
