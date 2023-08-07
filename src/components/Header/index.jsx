import { Container, Profile } from "./styles";
import { Input } from '../Input'
import { Link } from "react-router-dom";
import { ButtonText } from '../ButtonText'

export function Header() {
  return ( 
    <Container>
      <Link to='/'>
      <h2>RocketMovies</h2>
      </Link>
      <Input placeholder='Pesquisar pelo título'/>
      <Profile >
        <div>
          <Link to='/profile'>Luis Fernando</Link>
          <ButtonText title='sair'></ButtonText> 
        </div>
        <Link to='/profile'>
          <img src="https://github.com/luisfernando656.png" alt="Imagem do Usuário" />
        </Link>
      </Profile>
    </Container>
  )
}