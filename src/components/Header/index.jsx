import { Container, Profile } from "./styles";
import { Input } from '../Input'
import { Link } from "react-router-dom";

export function Header() {
  return ( 
    <Container>
      <Link to='/'>
      <h2>RocketMovies</h2>
      </Link>
      <Input placeholder='Pesquisar pelo título'/>
      <Profile to='/profile'>
        <div>
          <strong>Luis Fernando</strong>
          <span>sair</span> 
        </div>
        <img src="https://github.com/luisfernando656.png" alt="Imagem do Usuário" />
      </Profile>
    </Container>
  )
}