import React from 'react'
import '../App.css'
import { useContextSelector } from 'use-context-selector'
import { StateContext } from '../State/State'
import HeaderItem from './HeaderItem'

const HeaderList = () => {
  console.log("HeaderList is being rendered")
  const data = useContextSelector(StateContext, (state) => state.data)

  return (
    <div className="headerList">
      {data.map((item, i) => <HeaderItem  key={i} index={i} item={item} />)}
    </div>
  )
}

export default HeaderList
