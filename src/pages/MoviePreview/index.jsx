import { Container, Content, TitleRate, CreatorDate, ButtonsHeader } from "./styles"
import { Header } from '../../components/Header'
import { LinkA } from "../../components/LinkA"
import { Rate } from '../../components/Rate'
import { Tag } from '../../components/Tag'
import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { ButtonText } from "../../components/ButtonText"

import { api } from '../../services/api'

import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { format, sub } from 'date-fns';

import { useAuth } from "../../hooks/auth";
import AvatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function MoviePreview() {
  const [data, setData] = useState(null)
  const { user } = useAuth()
  const params = useParams()
  const formattedDate = data ? format(sub(new Date(data.created_at),{hours: 3}), "dd/MM/yy 'às' HH:mm:ss") : null
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholder
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  } 

  async function handleRemove() {
    const confirm = window.confirm('Deseja realmente remover essa nota?')

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNotes()
  }, [])

  return(
    <Container>
      <Header/>

      {
        data &&      
        <main>
          <ButtonsHeader>
           <LinkA onClick={handleBack} icon={FiArrowLeft} title='Voltar'/>
           <ButtonText onClick={handleRemove} title='Excluir filme'/>
          </ButtonsHeader>
          <Content className="custom-scrollbar">
            <TitleRate>
              <h1>{data.title}</h1>
              <Rate grade={data.grade}/>
            </TitleRate>
            <CreatorDate>
              <img src={avatarUrl} alt="Imagem do Usuário"/>
              <span>Por {user.name}</span>
              <FiClock/>
              <span>{formattedDate}</span>
            </CreatorDate>
            
            {data.tags &&
              <div>
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </div>
            }

            <p>{data.description}</p>
          </Content>
        </main>
      }
    </Container>
  )
}