import React from 'react'
import '../App.css'

const ViewA = ({text}) => {
  console.log("ViewA is being rendered")
  return (
    <div className="ViewA">
      <p>
        A
      </p>
      <p>
        {text}
      </p>
    </div>
  )
}

export default ViewA
