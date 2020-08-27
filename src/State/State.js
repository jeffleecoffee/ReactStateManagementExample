import React, { useReducer } from 'react'
import { createContext } from 'use-context-selector'
import initialState from './initial'
import Actions from './Actions/index'

export const StateContext = createContext(initialState)
export const DispatchContext = createContext()

const reducer = (state, action) => {
  if (!Actions[action.type]) {
    console.error(`No action of type: ${action.type}`)
    return null
  }
  return Actions[action.type](state, action)
}

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
          {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}
