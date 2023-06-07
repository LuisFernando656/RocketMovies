import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;

  border: 0;
  border-radius: 1.6rem;

  padding: 3.2rem;

  text-align: left;

  background: ${({theme}) => theme.COLORS.PINK_005};  

  margin-bottom: 2.4rem;

  > h2 {
    color: ${({theme}) => theme.COLORS.TX_WHITE};
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;

    margin-bottom: .8rem;
  }

  > div {
    > svg {
      width: 1.2rem;
      height: 1.2rem;

      margin-right: .6rem; 
    }
  }
 
  > p {
    height: 4.5rem;
    width: 100%;

    text-align: justify;
    color: ${({theme}) => theme.COLORS.TX_400};
    font-family: 'Roboto';
    line-height: 1.9rem;

    margin-top: 1.5rem;
  } 

  > footer {
    margin-top: 2.5rem;
    padding-bottom: .8rem;
    
    >span {
      background: ${({theme}) => theme.COLORS.BG_600};
    }
  }
`