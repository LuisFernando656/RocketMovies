import { Container, Profile } from "./styles";
import { Input } from '../Input'

export function Header() {
  return ( 
    <Container>
      <h2>RocketMovies</h2>
      <Input placeholder='Pesquisar pelo título'/>
      <Profile>
        <div>
          <strong>Luis Fernando</strong>
          <span>sair</span> 
        </div>
        <img src="https://github.com/luisfernando656.png" alt="Imagem do Usuário" />
      </Profile>
    </Container>
  )
}