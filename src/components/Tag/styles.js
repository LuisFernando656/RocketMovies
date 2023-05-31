import styled from 'styled-components'

export const Container = styled.span`
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  line-height: 1.4rem;
  color: ${({theme}) => theme.COLORS.TX_300};

  background-color: ${({theme}) => theme.COLORS.BG_700};
  border-radius: .8rem;
  padding: .8rem 1.6rem;
  margin-right: .8rem;

  width: max-content;
`