import { Container, Profile } from "./styles";
import { Input } from '../Input'
import { Link, useNavigate } from "react-router-dom";
import { ButtonText } from '../ButtonText'
import { SearchDropdown } from '../SearchDropDown'

import { api } from '../../services/api'
import { useAuth } from "../../hooks/auth";
import AvatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useState, useEffect, useRef } from "react";

export function Header() {
  const [searchText, setSearchText] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [notes, setNotes] = useState([])
  const dropdownRef = useRef(null)
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholder

  function handleLogout() {
    const confirm = window.confirm('Tem certeza que deseja sair?')

    if(confirm) {
      navigate('/')
      signOut()
    }
  }

  const handleSearch = (e) => {
    const searchText = e.target.value
    setSearchText(searchText)
  }

  const handleInputClick = () => {
    setShowDropdown(true)
  }

  const handleDropdown = () => {
    setShowDropdown(false)
  }

  const handleNoteSelection = (title) => {
    setSearchText(title.trim())
    handleDropdown()
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    function globalOutsideClick() {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }

    async function fetchNotes() {
      const response = await api.get(`/notes?title=${''}`)
      setNotes(response.data)
    }

    fetchNotes()
    globalOutsideClick()
  }, []);

  return ( 
    <Container>
      <Link to='/'>
      <h2>RocketMovies</h2>
      </Link>
      <div>
        
      <Input
        placeholder="Pesquisar por título..."
        value={searchText}
        onChange={handleSearch}
        onClick={handleInputClick}
      />
       {showDropdown && searchText && (
        <div ref={dropdownRef}>
          <SearchDropdown notes={notes} searchText={searchText} onSelected={handleNoteSelection} />
        </div>
      )}
      </div>
      <Profile >
        <div>
          <Link to='/profile'>{user.name}</Link>
          <ButtonText onClick={handleLogout} title='sair'></ButtonText> 
        </div>
        <Link to='/profile'>
          <img src={avatarUrl} alt={user.name}/>
        </Link>
      </Profile>
    </Container>
  )
}