import styled from 'styled-components'
import { FiStar } from 'react-icons/fi'

export const Container = styled.div`
  color: ${({theme}) => theme.COLORS.PINK};

  > svg {
    width: 2rem;
    height: 2rem;
  }
`

export const RatingStars = styled(FiStar)`
  fill: ${({theme, $active}) => $active ? theme.COLORS.PINK : 'none'};
`