import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  
  return (
    <UserContextProvider>
    <h1>useContext in react</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}
//step 1: create Context
//step 2: wrap all the child inside a provider
//step 3: pass value
//step 4: consumer ke andar jaake consume karlo
export default App
