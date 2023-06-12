import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;

  width: 100%;
  height: 11.6rem;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.BD_HEAD};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12.3rem;

  > h2 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    color:  ${({theme}) => theme.COLORS.PINK};
    margin-right: 6.4rem;
  }
`

export const Profile = styled.div`
  width: auto;
  display: flex;
  align-items: center;

  margin-left: 6.4rem;

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 0.9rem;

    width: max-content;

    font-size: 1.4rem;
    line-height: 1.8rem;

    strong {
      font-weight: 700;
    }

    span {
      color:  ${({theme}) => theme.COLORS.TX_200};
      text-align: end;
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.COLORS.BD_HEAD};
  }
`