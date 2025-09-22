import { useState } from 'react'
import AboutMe from './aboutMe/AboutMe'
import Page from './page/Page'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutMe/>
      <Page/>

    </>
  )
}

export default App
