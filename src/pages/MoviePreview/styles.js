import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'back'
    'content';

  overflow: hidden;

  > main {
    max-width: 100%;
    margin: 0 auto;
  }
`

export const Content = styled.div`
  grid-area: content;

  margin: 0 auto;

  width: 80%;

  height: 63rem;
  padding-right: 1.6rem;

  overflow-y: auto;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-wrap: wrap;
  }

  > p {
    text-align: justify;
    margin-top: 4rem;
  }

  > button:last-child {
    color: ${({ theme }) => theme.COLORS.TX_WHITE};

    margin-top: 4rem;
  }
`

export const TitleRate = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;

    margin-right: 1.9rem;
  }
`

export const CreatorDate = styled.div`
  display: flex;
  align-items: center;

  margin: 2.4rem 0 4rem;

  > img {
    width: 1.6rem;
    height: 1.6rem;

    border: 1px solid ${({ theme }) => theme.COLORS.BD_HEAD};
    border-radius: 3.5rem;

    margin-right: 0.8rem;
  }

  > svg {
    width: 1.6rem;
    height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK};

    margin: 0 0.8rem;
  }
`

export const ButtonsHeader = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-block: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: ${({ theme }) => theme.COLORS.TX_WHITE};
  }
`
