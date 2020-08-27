import React, {useState} from 'react'
import '../App.css'
import { useContext} from 'use-context-selector'
import { DispatchContext} from '../State/State'

const AddUnwatchedDataButton = () => {
  console.log("AddUnwatchedDataButton is being rendered")
  const dispatch = useContext(DispatchContext)
  // useState allows us to rerender just this component while the below
  // dispatch modifies the state.redHerring through an action
  const [count, setCount] = useState(1)

  return (
    <button onClick={() => {
      dispatch({
        type: 'ADD_UNWATCHED_DATA', 
        data: {redHerring: count}
      })
      setCount(count + 1)
    }}>
      Current Unwatched Data Count: {count-1}
    </button>
  )
}

export default AddUnwatchedDataButton
