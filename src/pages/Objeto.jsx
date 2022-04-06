import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Objeto = () => {

     const carros =[

     { cor: 'Branco', marca: 'VW', modelo: 'Fusca', ano: 1980, foto:"https://cdn.autopapo.com.br/box/uploads/2019/01/18210228/volkswagen-fusca-itamar-branco-lateral-732x488.jpg"},
     { cor: 'Preto', marca: 'VW', modelo: 'Gol', ano: 2010, foto:"https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2022/202201/20220121/volkswagen-gol-1.0-mi-8v-flex-2p-manual-g.iv-WMIMAGEM21380828736.jpg"},
     { cor: 'Prata', marca: 'VW', modelo: 'Celta', ano: 2015, foto:"https://www.limaecostaveiculos.com.br/carros/92cbc9adce38ed5d4c8251fc01cdb00b-thumbjpeg-chevrolet-celta-8573753-1000-750-70.jpg"},
     { cor: 'AZul', marca: 'VW', modelo: 'Corola', ano: 2016, foto:"https://carro.blog.br/wp-content/uploads/2020/09/corolla-2021.jpg"}

    ]  
  return (
    <div>
      <h1>Objeto</h1>
      <h2>Carros</h2>

       <Row>
        {carros.map(item => (
          <Col md={3}>
          <Card>
            <Card.Img variant="top" src={item.foto}/>
            <Card.Body>
              <Card.Title>{item.marca} - {item.modelo}</Card.Title>
              <Card.Text><strong></strong></Card.Text>
            </Card.Body>
          </Card>
          </Col>
        )
          )}
          </Row>
      </div>
  )
}

export default Objeto