import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.PINK};

  a {
    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;

    > svg {
      margin-right: 0.8rem;
    }
  }
`
