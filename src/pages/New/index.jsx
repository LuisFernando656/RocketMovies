import { Container, Form, MovieItemsContainer, MovieCreate } from "./styles";

import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { LinkA } from '../../components/LinkA'
import { Textarea } from '../../components/Textarea'
import { MovieItem } from "../../components/MovieItem";
import { Button } from '../../components/Button'
import { Input } from "../../components/Input";

import { api } from '../../services/api'

import { useNavigate } from "react-router-dom";

import { useState } from "react";

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [grade, setGrade] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState([])

  const navigate = useNavigate()

  function handleNewTag() {
    if(!newTag) {
      return
    }

    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {    
    if(!title) {
      return alert('Titúlo necessario')
    }

    if(!grade) {
      return alert('Nota necessaria')
    }
    
    if(grade < 0 || grade > 5 || isNaN(grade)) {
      return alert('Apenas números de 0 a 5')
    }
    
    if(newTag) {
      return alert('Você deixou uma tag sem confirmar')
    }

    await api.post('/notes', {
      title,
      grade,
      description,
      movie_tags: tags
    })

    alert('Nota de filme criado com sucesso')
    navigate('/')
  }

  return (
    <Container>
      <Header/>

      <main>
      <LinkA to='/' title='Voltar' icon={FiArrowLeft}/>

      <Form>
        <MovieCreate className="custom-scrollbar">
        <h1>Novo Filme</h1>
        <div>
        <Input
         placeholder='Nome'
         onChange={e => setTitle(e.target.value)}
         />
        <Input 
        placeholder='Sua nota (de 0 a 5)'
        onChange={e => setGrade(e.target.value)}
        />
        </div>
        <Textarea 
        placeholder='Observaçãoes'
        onChange={e => setDescription(e.target.value)}
        />

        <h2>Marcadores</h2> 

        <MovieItemsContainer>
          {
            tags.map((tag, index) => (
              <MovieItem
              key={String(index)}
              value={tag}
              onClick={() =>{handleRemoveTag(tag)}}
              />
            ))
          }
          <MovieItem
           isNew 
           placeholder='Novo Marcador'
           value={newTag}
           onChange={e => setNewTag(e.target.value)}
           onClick={handleNewTag}
           />
        </MovieItemsContainer>
        </MovieCreate>

        <div>
          <Button title='Excluir Filme'/>
          <Button title='Salvar alterações' onClick={handleNewNote}/>
        </div>
      </Form>
      </main>
    </Container>
  )
}