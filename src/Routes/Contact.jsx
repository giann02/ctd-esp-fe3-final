import React from 'react'
import Form from '../Components/Form'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { Theme } = useContext(ContextGlobal)
  return (
    <div className='contact' style={{background:Theme.backgroundHome, color:Theme.color}}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact