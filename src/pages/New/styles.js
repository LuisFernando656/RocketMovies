import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    max-width: 113.7rem;
    margin: 4rem auto;

    overflow: hidden;
  }
`

export const Form = styled.form`
  width: 100%;
  height: 65rem;

  overflow-y: auto;
  padding-right: 1.6rem;
 
  > h1 {
    margin-bottom: 4rem;
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
  }

  > h2 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;

    color: ${({theme}) => theme.COLORS.TX_400};

    margin: 4rem 0 2.4rem;
  }

  > div:last-child {
    display: flex;
    align-items: center;

    button:first-child {
      margin-right: 4rem;
      
      background: ${({theme}) => theme.COLORS.BLACK};
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }
`

export const MovieItemsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  border-radius: .8rem;
  padding: 1.6rem 1.6rem 0;
  margin-bottom: 4rem;

  background: ${({theme}) => theme.COLORS.BLACK};
`