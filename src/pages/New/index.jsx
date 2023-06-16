import { Container, Form, MovieItemsContainer } from "./styles";

import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Link } from '../../components/Link'
import { Textarea } from '../../components/Textarea'
import { MovieItem } from "../../components/MovieItem";
import { Button } from '../../components/Button'

export function New() {
  return (
    <Container>
      <Header/>

      <main>
      <Link href='./' title='Voltar' icon={FiArrowLeft}/>

      <Form className="custom-scrollbar">
        <h1>Novo Filme</h1>
        <Textarea placeholder='Observaçãoes'/>

        <h2>Marcadores</h2> 

        <MovieItemsContainer>
          <MovieItem value='React'/>
          <MovieItem isNew placeholder='Novo Marcador'/>
        </MovieItemsContainer>

        <div>
          <Button title='Excluir Filme'/>
          <Button title='Salvar alterações'/>
        </div>
      </Form>
      </main>
    </Container>
  )
}