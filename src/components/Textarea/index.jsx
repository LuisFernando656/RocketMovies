import { Container } from './styles'

export function Textarea({value, ...rest}) {
  return (
    <Container {...rest} className='custom-scrollbar'>
      {value}
    </Container>
  )
}