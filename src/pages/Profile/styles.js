import styled from 'styled-components'

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 6.4rem;
  width: 18.6rem;
  height: 18.6rem;
  
  >img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 9.3rem;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background: ${({theme}) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .7rem;
    right: .7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      
      color: ${({theme}) => theme.COLORS.BG_600};
    }
  }
`

export const Container  = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background: ${({theme}) => theme.COLORS.PINK_005};

    display: flex;
    align-items: center;

    padding: 0 14.4rem;
  }

`

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > button {
    margin-top: 2.4rem;
  }
`