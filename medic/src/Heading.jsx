import React from 'react'

function Heading({text,className}) {
  return (
    <div className={className}>
        <h1>{text}</h1>
    </div>
  )
}

export default Heading