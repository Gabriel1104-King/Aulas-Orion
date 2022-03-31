import React from 'react'

const Array = () => {

  const carros = ['Fusca', 'Gol', 'Celta', 'Corola']
  const pessoas =['Kane', 'Mount', 'Arnold', 'Grealish']
  return (
    <div>
      
      <h1>Carros</h1>
      {
        carros.map(item => (
          <p>{item}</p>
        ))
 }
      <h2>Pessoas</h2>
 {
        pessoas.map(item => (
          <ul>
            <li>{item}</li>
            </ul>
        ))
        }
      

      </div>
  )
}

export default Array