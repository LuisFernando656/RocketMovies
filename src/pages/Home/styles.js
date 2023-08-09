import styled from 'styled-components'  
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem 13.3rem auto;
  grid-template-areas: 
  'header'
  'titleandbutton'
  'content';
  
  overflow: hidden;
  
  > main {
    max-width: 113.7rem;
    margin: 0 auto;
  }
  `

export const TitleAndButton = styled.div`
  grid-area: 'titleandbutton';
  
  width: 100%;

  margin-top: 4.7rem;
  margin-bottom: 3.7rem ;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  `
export const NewMovie = styled(Link)`
  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BG_900};
  
  display: flex;
  align-items: center;
  
  height: 4.8rem;
  padding: 1.35rem 3.2rem;
  border-radius: 1rem;
  
  > svg {
    margin-right: .8rem;
  }
  `

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  height: 61rem;
  padding-right: .8rem;

  > button:last-child {
    margin: 0;
  }

  `
