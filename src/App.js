import React from 'react'
import { StateProvider } from './State/State'
import Home from './Home/Home'

const App = () => (
  <StateProvider>
    <Home />
  </StateProvider>
)

export default App
