import { Container, Profile } from "./styles";
import { Input } from '../Input'
import { Link, useNavigate } from "react-router-dom";
import { ButtonText } from '../ButtonText'

import { api } from '../../services/api'
import { useAuth } from "../../hooks/auth";
import AvatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {

  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholder

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
          <Link to='/profile'>{user.name}</Link>
          <ButtonText onClick={handleLogout} title='sair'></ButtonText> 
        </div>
        <Link to='/profile'>
          <img src={avatarUrl} alt={user.name}/>
        </Link>
      </Profile>
    </Container>
  )
}