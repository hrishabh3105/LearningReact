import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();         //Use Navigate hook to navigate between pages
    function handleClick(){
        navigate('/about')
    }
  return (
    <div>
      Home Page
      <button onClick={handleClick}>Move to About page</button>
    </div>
  )
}

export default Home
