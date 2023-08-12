import { styled } from "styled-components"

export const Container = styled.div`
  position: absolute;

  width: 100%;

  background: ${({theme}) => theme.COLORS.BG_800};
  border-radius: 1rem;
  padding: .8rem 1rem ;

`

export const Note = styled.div`
  cursor: default;

  border-radius: 0.5rem;
  padding: .5rem .9rem;

  &:hover {
    background: ${({theme}) => theme.COLORS.BG_900};
  }
`

export const Nothing = styled.div`
  padding: .5rem .9rem;
  cursor: default;
`