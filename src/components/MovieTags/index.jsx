import { Container } from "./styles";
import { Rate } from '../Rate'
import { Tag } from '../Tag'
import TextTruncate from 'react-text-truncate';

export function MovieTags({data, ...rest}) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <Rate grade={data.grade}/>

      {data.description && (
        <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        text={data.description}
        />
      )
      }
 
      {
        data.tags && data.tags.length > 0 && (
          <footer>
            {data.tags.map(tag => (
              <Tag key={tag.id} title={tag.name} />
            ))}
          </footer>
        )
      }

    </Container>
  )
}