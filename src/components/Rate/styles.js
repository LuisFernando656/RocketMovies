import styled from 'styled-components'

export const Container = styled.div`
  color: ${({theme}) => theme.COLORS.PINK};

  > svg {
    width: 2rem;
    height: 2rem;
  }

  .on {
    fill: ${({theme}) => theme.COLORS.PINK};
  }
`