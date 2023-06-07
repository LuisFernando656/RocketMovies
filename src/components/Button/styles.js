import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BG_900};

  height: 4.8rem;
  border: 0;
  padding: 0 1.4rem;
  border-radius: 1rem;
  margin-top: 1.6rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`