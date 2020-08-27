import React from 'react'
import '../App.css'
import { useContextSelector, useContext} from 'use-context-selector'
import { StateContext, DispatchContext} from '../State/State'

const HeaderItem = ({index, item}) => {
  console.log(`HeaderItem ${index} is being rendered`)
  const dispatch = useContext(DispatchContext)

  // By subscribing specifically for the selected rather than selectedIndex, it allows the boolean to only
  // change for the item being deselected and item being selected. Meaning we don't have to rerender any other header item
  const selected = useContextSelector(StateContext, (state) => {
    if (state.selectedIndex === index) {
      return true
    }
    return false
  })

  return (
    <button 
      style={{background: selected ? '#4CAF50' : '#ffffff'}}
      onClick={() => {
        dispatch({
          type: 'CHANGE_SELECTED_INDEX', 
          selectedIndex: index
        })
    }}>
      View Index {index + 1}
    </button>
  )
}

export default HeaderItem