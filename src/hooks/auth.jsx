import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({children}) {
  const [data, setData] = useState({})

  async function signIn({email, password}) {
    try {
      const response = await api.post('/sessions', {email, password})

      const {token,user} = response.data

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user)) 
      localStorage.setItem('@rocketmovies:token', token)

      api.defaults.headers.common['authorization'] = `Bearer ${token}`

      setData({user, token})
    }catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert('Não foi possivel entrar')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketmovies:user')
    localStorage.removeItem('@rocketmovies:token')

    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketmovies:token')
    const user = localStorage.getItem('@rocketmovies:user')

    if(token && user) {
      api.defaults.headers.common['authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  },[])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }