import React from 'react'
import { Card } from 'react-bootstrap'

const Cartao = () => {
  return (
    <div>
        <Card border="primary" style={{ width: '18rem' }}>
   <Card.Img variant="top" src="https://s.yimg.com/ny/api/res/1.2/PZqCq_H4cW4P.QbARU7WNQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/uu/api/res/1.2/4D0OcAUGEjHImH39EZZwPA--~B/aD01NjQ7dz04NDY7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/pt/lance__99/9bed952db05972235b8a483178c0d336" />
    
    <Card.Body>
      <Card.Title>Neymar cai junto ao PSG</Card.Title>
      <Card.Text>
        Mas uma vez o astro brasileiro viu uma remontada contra seu time.
      </Card.Text>
    </Card.Body>
  </Card>
    </div>
  )
}

export default Cartao