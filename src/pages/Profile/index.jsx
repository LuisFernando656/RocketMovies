import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { LinkA } from '../../components/LinkA'

import { api } from '../../services/api'
import AvatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useState } from 'react'
import { useAuth, } from '../../hooks/auth'

import {Avatar, Container, Form } from './styles'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldpassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldpassword,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({user: userUpdated, avatarFile})
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return(
    <Container>
      <header>
        <LinkA title='Voltar' to='/' icon={FiArrowLeft}/>   
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do Usuário" />

          <label htmlFor="avatar">
            <FiCamera/>

            <input 
            id="avatar" 
            type='file'
            onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          placeholder='Nome' 
          type='text' 
          icon={FiUser} 
          value={name}
          onChange={e => setName(e.target.value)}
        /> 
        <Input 
          placeholder='Email' 
          type='email' 
          icon={FiMail} 
          value={email}
          onChange={e => setEmail(e.target.value)}
        /> 
        <Input 
          placeholder='Senha atual' 
          type='password' 
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}
        /> 
        <Input 
          placeholder='Nova senha' 
          type='password' 
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        /> 

        <Button title='Salvar' onClick={handleUpdate}/>
      </Form>
    </Container>
  )
}