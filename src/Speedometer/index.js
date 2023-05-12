import React, { useState } from 'react'
import './index.css'
function Index() {
    const [count,setCount] = useState(0)
  return (
    <div>
      <h1 className='head'>SPEEDOMETER</h1>
      <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png " className='image' alt=""/>
      <p className='para'>Speed is <span className={count>10 ? 'p' : ''}>{count}</span> mph</p>
      <p className='para'>Min speed limit is 0mph,Max speed limit is 200mph</p>
      <div>
      <button onClick={()=> setCount(count+10)} className='button1'>Acclerate</button>
      <button onClick={()=> setCount(count-10)} className='button2'>Applybreak</button>
      </div>
    </div>
  )
}

export default Index
