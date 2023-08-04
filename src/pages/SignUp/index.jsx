import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { LinkA } from '../../components/LinkA'

import { Container, Background, Form } from "./styles";

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSignUp() {
      if(!name || !email || !password) {
        return alert('Preeencha todos os campos')
      }

      try{       
        await api.post('/users', {name, email, password})
      }catch(error){
      if(error.response){
        return alert(error.response.data.message)
      }else{
        return alert('Não foi possivel cadastrar')
      }
    }
    alert('Usuário cadastrado com sucesso')
    navigate('/')
  } 

  return (
    <Container>
       <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input 
        placeholder='Nome' 
        type="text" 
        icon={FiUser} 
        onChange={e => setName(e.target.value)}
        />
        <Input
         placeholder='Email' 
         type="text" icon={FiMail} 
         onChange={e => setEmail(e.target.value)}
         />
        <Input 
        placeholder='Senha' 
        type='password' 
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}
        />

        <Button title='Cadastrar' onClick={handleSignUp}/>

        <LinkA to='/' title='Voltar para o login' icon={FiArrowLeft}/>
      </Form>
      <Background/>
    </Container>
  )
}