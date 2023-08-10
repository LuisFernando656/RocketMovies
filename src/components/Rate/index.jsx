import { Container , RatingStars} from './styles.js'

export function Rate({grade}) {
  const lengthstar = 5
  const stars = Array.from({length: lengthstar})

  return(
    <Container>
      {
        stars.map((star, index) => (
          <RatingStars key={index} $active={index < grade}/>
        ))
      }

    </Container>
  )
}