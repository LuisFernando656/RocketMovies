import styled from 'styled-components'

export const Container = styled.div`
  color: ${({theme}) => theme.COLORS.PINK};

  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;      

  max-width: 115.5rem;
  margin-inline: auto;
  
  > svg {
    margin-right: 0.8rem;
  }

  a {
    color: ${({theme}) => theme.COLORS.PINK};
  }
`