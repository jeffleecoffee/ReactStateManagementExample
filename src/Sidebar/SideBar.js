import React from 'react'
import '../App.css'
import AddUnwatchedDataButton from './AddUnwatchedDataButton'
import AddWatchedDataButton from './AddWatchedDataButton'

const SideBar = () => {
  console.log("SideBar is being rendered")
  return (
    <div className="SideBar">
        <AddUnwatchedDataButton />
        <AddWatchedDataButton />
    </div>
  )
}

export default SideBar
