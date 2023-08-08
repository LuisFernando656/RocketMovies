import styled from 'styled-components'

export const Container = styled.div`
  width: 24rem;
  height: 100%;

  display: flex;
  align-items: center;

  margin-right: 2.4rem;
  padding-right: 1.6rem;
  margin-bottom: 1.6rem;

  color: ${({ theme }) => theme.COLORS.TX_WHITE};
  background: ${({ theme, $isNew }) => $isNew ? 'transparent' : theme.COLORS.BG_800};
  
  border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.TX_200}` : 'none'};
  border-radius: 1rem;
  
  button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
  
  input {
    height: 5.6rem;
    width: 100%;
    
    border: none;
    background: transparent;

    padding: 1.6rem;

    color: ${({theme}) => theme.COLORS.TX_WHITE};

    &::placeholder {
      color: ${({ theme}) =>  theme.COLORS.TX_200};
    }
  }



`