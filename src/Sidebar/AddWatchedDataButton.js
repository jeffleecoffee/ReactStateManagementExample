import React from 'react'
import '../App.css'
import { useContext} from 'use-context-selector'
import { DispatchContext} from '../State/State'

const AddWatchedDataButton = () => {
  console.log("AddWatchedDataButton is being rendered")
  const dispatch = useContext(DispatchContext)

  return (
    <>
      <button onClick={() => {
        dispatch({
          type: 'ADD_DATA', 
          data: {
            ViewType: "A",
            Text: "View Type A"
          }
        })
      }}>
        Add View Type A
      </button>
      <button onClick={() => {
        dispatch({
          type: 'ADD_DATA', 
          data: {
            ViewType: "B",
            Text: "View Type B"
          }
        })
      }}>
        Add View Type B
      </button>
    </>
  )
}

export default AddWatchedDataButton
