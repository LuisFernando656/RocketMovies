import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  padding: 1.9rem 1.6rem;

  border-radius: 1rem;

  background: ${({theme}) => theme.COLORS.BG_800};
  color: ${({theme}) => theme.COLORS.TX_WHITE};

  border: none;
  resize: none;

  &::placeholder {
    color: ${({theme}) => theme.COLORS.TX_200};
  }
`