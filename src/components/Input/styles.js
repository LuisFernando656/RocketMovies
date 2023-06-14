import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.BG_800};
  color: ${({theme}) => theme.COLORS.TX_200};

  border-radius: 1rem;
  margin-bottom: .8rem;

  > svg {
    margin-left: 1.6rem;
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.9rem;

    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.TX_WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({theme}) => theme.COLORS.TX_200};
    }
  }
`