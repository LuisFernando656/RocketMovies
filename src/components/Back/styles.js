import styled from 'styled-components'

export const Container = styled.div`
  color: ${({theme}) => theme.COLORS.PINK};

  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2.4rem;      

  a {
    color: ${({theme}) => theme.COLORS.PINK};
  }
`