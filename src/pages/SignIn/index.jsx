import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { LinkA } from '../../components/LinkA'

import { useAuth } from '../../hooks/auth'

import { useState } from 'react'

import { Container, Background, Form } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSign() {
    signIn({email, password})
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
         placeholder='Email' 
         type="text" 
         icon={FiMail}
         onChange={e => setEmail(e.target.value)} />
        <Input
         placeholder='Senha'
         type='password' 
         icon={FiLock}
         onChange={e => setPassword(e.target.value)}
         />

        <Button title='Entrar' onClick={handleSign}/>

        <LinkA to='/register' title='Criar Conta'/>
      </Form>
      <Background/>
    </Container>
  )
}