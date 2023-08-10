import { Container, TitleAndButton, Content, NewMovie    } from './styles'
import { Header } from '../../components/Header'
import { FiPlus } from 'react-icons/fi'
import { MovieTags } from '../../components/MovieTags'

import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title`)

      setNotes(response.data)
    }

    fetchNotes()
  },[])

  return(
    <Container>
      <Header/>

      <main>
        <TitleAndButton>
          <h1>Meus Filmes</h1>
          <NewMovie to='/New'>
            <FiPlus/>
            Adicionar Filme
          </NewMovie>
        </TitleAndButton>

        <Content className="custom-scrollbar">
          {
            notes&&
            notes.map(note => (
              <MovieTags
                key={String(note.id)}
                data={note}
              />
            ))
          }
        </Content>
      </main>
    </Container>
  )
}