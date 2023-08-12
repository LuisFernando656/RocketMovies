import { Container, Note , Nothing } from "./styles";
import { useNavigate } from "react-router-dom";

export function SearchDropdown({notes, searchText, onSelected, ...rest}) {
  const navigate = useNavigate()

  const filteredNotes = notes.filter(note =>
    {
      const formattedTitle = note.title.replace(/\s+/g, '').toLowerCase();
      const formattedSearchText = searchText.replace(/\s+/g, '').toLowerCase();

      return formattedTitle.includes(formattedSearchText);
    }
  )

  function handleMoviePreview(id) {
    navigate(`/moviepreview/${id}`)
    onSelected('')
  }

    return (
      <Container {...rest}>
       {filteredNotes.length === 0 ? (
        <Nothing>Nenhum filme</Nothing>
       ) :
       filteredNotes.map(note => (
        <Note key={note.id} onClick={() => handleMoviePreview(note.id)}>
          {note.title}
        </Note>
        ))
        }
      </Container>
    )
}