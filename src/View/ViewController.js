import React from 'react'
import '../App.css'
import { useContextSelector } from 'use-context-selector'
import { StateContext } from '../State/State'
import ViewA from './ViewA'
import ViewB from './ViewB'

const ViewController = () => {
  console.log("ViewController is being rendered")
  const view = useContextSelector(StateContext, (state) => {
    return state.data[state.selectedIndex]
  })

  let renderedView
  if (view.ViewType === "A") {
    renderedView = (<ViewA text={view.Text} />)
  } else {
    renderedView = (<ViewB text={view.Text} />)
  }

  return (
    <>
      {renderedView}
    </>
  )
}

export default ViewController