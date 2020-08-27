import React from 'react'
import '../App.css'

const ViewB = ({text}) => {
  console.log("ViewB is being rendered")
  return (
    <div className="ViewA">
      <p>
        B
      </p>
      <p>
        {text}
      </p>
    </div>
  )
}

export default ViewB
