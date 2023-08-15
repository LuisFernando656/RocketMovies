import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
`

export const Form = styled.form`
  padding: 0 13.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 4.8rem;
    line-height: 6.3rem;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.TX_P};

    margin-bottom: 4.8rem;
  } 

  > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;

    margin-bottom: 4.8rem;
  }

  div:nth-child(4) {
    margin-bottom: .8rem;
  }

  > div:last-child {
    margin: 4.2rem auto;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`