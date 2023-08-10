import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    max-width: 100%;
    margin: 4rem auto;

    overflow: hidden;
  }
`

export const Form = styled.form`
  width: 80%;
  padding-right: 1.6rem;
  height: 100%;

  margin : 0 auto;

 
   h1 {
    margin-bottom: 4rem;
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
  }

   h2 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;

    color: ${({theme}) => theme.COLORS.TX_400};

    margin: 4rem 0 2.4rem;
  }

  > button:last-child {
    margin-top: 4rem;
    margin-right: 4rem;
  }
`

export const MovieItemsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  border-radius: .8rem;
  padding: 1.6rem 1.6rem 0;

  background: ${({theme}) => theme.COLORS.BLACK};
`

export const MovieCreate = styled.div`
  overflow-y: auto;
  height: 56rem;

  padding-right: 0.8rem;

  textarea {
    margin-top: 4rem;
  }

  > div:nth-child(2) {
    
    display: flex;
    gap: 4rem;
    
    input {
      color: ${({theme}) => theme.COLORS.TX_WHITE};
      font-size: 1.6rem; 

      &::placeholder {
        color: ${({theme}) => theme.COLORS.TX_200};
      }
    }
  }
`