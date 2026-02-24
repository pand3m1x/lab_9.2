import { useState } from 'react'

import './App.css'
import TextInput from './components/CharacterCounter/CharacterCounter'
import StatsDisplay from './components/StatsDisplay/StatsDisplay'

function App() {
  

  return (
    <>
     <TextInput></TextInput>
     <StatsDisplay></StatsDisplay>
    </>
  )
}

export default App
