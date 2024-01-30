import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Learner from './components/Learner'
import { data } from './data'

function App() {
  const [learner, setLearner] = useState(data)

  return (
    <>
      {learner.map((learner, index) => (
        <Learner key={index} learner={learner} />
        ))}

    </>
  )
}

export default App
