import React from 'react'
import './Component1.css'
function Service() {
  console.log("servie request")
  return (
 
    <div>
  
  <h1 className='text-6xl bold'>use callback</h1>
    </div>
  )
}

export default React.memo(Service)
