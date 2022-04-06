import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Contador = () => {

   // let numero = 10;

   let [numero, setNumero] = useState(10)



    function somar(){
         setNumero(++numero)
         console.log(++numero)
    }

    function subtrair(){
        setNumero(--numero)
        console.log(--numero)
   }
   
   function somar10(){
    setNumero(numero+10)
    console.log(numero+10)
}



  return (
    <div>
        <h1>Contador</h1>

        <Button variant = "dark" onClick={somar10}>+10</Button>
        <Button variant = "warning" onClick={subtrair}>-5</Button>
       <Button variant = "danger" onClick={subtrair}>-</Button>
        {numero}
       <Button variant = "success" onClick={somar}>+</Button>
       <Button variant = "info" onClick={somar}>+5</Button>
       <Button variant = "primary" onClick={somar}>+10</Button>
        
    </div>
  )
}

export default Contador