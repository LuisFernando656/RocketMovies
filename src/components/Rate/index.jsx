import { FiStar } from 'react-icons/fi'  
import { Container } from './styles.js'

export function Rate() {
  return(
    <Container>
      <FiStar className='on'/>
      <FiStar className='on'/>
      <FiStar className='on'/>
      <FiStar className='on'/>
      <FiStar/>
    </Container>
  )
}