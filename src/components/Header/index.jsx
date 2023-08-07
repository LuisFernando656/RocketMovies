import { Container, Profile } from "./styles";
import { Input } from '../Input'
import { Link, useNavigate } from "react-router-dom";
import { ButtonText } from '../ButtonText'

import { useAuth } from "../../hooks/auth";

export function Header() {

  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    const confirm = window.confirm('Tem certeza que deseja sair?')

    if(confirm) {
      navigate('/')
      signOut()
    }
  }

  return ( 
    <Container>
      <Link to='/'>
      <h2>RocketMovies</h2>
      </Link>
      <Input placeholder='Pesquisar pelo título'/>
      <Profile >
        <div>
          <Link to='/profile'>Luis Fernando</Link>
          <ButtonText onClick={handleLogout} title='sair'></ButtonText> 
        </div>
        <Link to='/profile'>
          <img src="https://github.com/luisfernando656.png" alt="Imagem do Usuário" />
        </Link>
      </Profile>
    </Container>
  )
}