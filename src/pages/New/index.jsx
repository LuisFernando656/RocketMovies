import { Container, Form, MovieItemsContainer, MovieCreate } from "./styles";

import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { LinkA } from '../../components/LinkA'
import { Textarea } from '../../components/Textarea'
import { MovieItem } from "../../components/MovieItem";
import { Button } from '../../components/Button'
import { Input } from "../../components/Input";

export function New() {
  return (
    <Container>
      <Header/>

      <main>
      <LinkA to='/' title='Voltar' icon={FiArrowLeft}/>

      <Form>
        <MovieCreate className="custom-scrollbar">
        <h1>Novo Filme</h1>
        <div>
        <Input placeholder='Nome'/>
        <Input placeholder='Sua nota (de 0 a 5)'/>
        </div>
        <Textarea  placeholder='Observaçãoes'/>

        <h2>Marcadores</h2> 

        <MovieItemsContainer>
          <MovieItem value='React'/>
          <MovieItem isNew placeholder='Novo Marcador'/>
        </MovieItemsContainer>
        </MovieCreate>

        <div>
          <Button title='Excluir Filme'/>
          <Button title='Salvar alterações'/>
        </div>
      </Form>
      </main>
    </Container>
  )
}