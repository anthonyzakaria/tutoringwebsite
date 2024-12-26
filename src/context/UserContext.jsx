import { createContext, useState, useEffect } from 'react'

const initialUserState = {
  id: null,
  name: '',
  role: '', // 'student' or 'tutor'
  university: '',
}

export const UserContext = createContext({
  user: initialUserState,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  setUser: () => {}
})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUserState)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('appUser')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('appUser', JSON.stringify(user))
    } else {
      localStorage.removeItem('appUser')
    }
  }, [user, isAuthenticated])

  const login = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
  }

  const logout = () => {
    setUser(initialUserState)
    setIsAuthenticated(false)
  }

  return (
    <UserContext.Provider value={{ user, isAuthenticated, login, logout, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
