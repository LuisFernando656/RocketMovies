import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from '../../components/Link'

import { Container, Background, Form } from "./styles";

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder='Email' type="text" icon={FiMail} />
        <Input placeholder='Senha' type='password' icon={FiLock}/>

        <Button title='Entrar'/>

        <Link href='/' title='Criar Conta'/>
      </Form>
      <Background/>
    </Container>
  )
}