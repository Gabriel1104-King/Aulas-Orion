import './App.css';
import Menu from './components/Menu';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';
//import Cartao from './components/Cartao';
//import Box from './components/Menu';

import Carros from './pages/Carros';
import Objeto from './pages/Objeto';
import Array from './pages/Array';
import Contador from './pages/Contador';
import Filmes from './pages/Filmes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
     
        
        

  
      <BrowserRouter>
      <Menu/>
      <Container>
      <Routes>
      <Route path="/carros" element={<Carros/>} />
      <Route path="/array" element={<Array/>} />
      <Route path="/objeto" element={ <Objeto/>}/>
      <Route path="/contador" element={ <Contador/>}/>
      <Route path="/filmes" element={ <Filmes/>}/>

      
       </Routes>
       </Container>
       </BrowserRouter>
          
    {/* 
  <Container>
   <Box/><Cartao imagem=""></Cartao>
   <Cartao></Cartao>

   <Card border="primary" style={{ width: '18rem' }}>
   <Card.Img variant="top" src="https://istoe.com.br/wp-content/uploads/sites/14/2022/03/622a466fd6919-1-418x235.jpeg"></Card.Img>
    
    <Card.Body>
      <Card.Title>Mbappe de saída?</Card.Title>
      <Card.Text>
        Se antes parecia dificil uma renovação do atacante frances,agora é quase impossivel. Muito provavel que ele vá para o Real Madrid de graça,na proxima janela
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card border="primary" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://conteudo.imguol.com.br/c/esporte/0f/2022/02/21/messi-mbappe-e-neymar-durante-a-partida-entre-psg-e-real-madrid-pela-liga-dos-campeoes-1645455984166_v2_1x1.jpg"></Card.Img>

   <Card.Body>
     <Card.Title>Trio MMN foi um fracasso</Card.Title>
     <Card.Text>
      Com uma pessima adaptação de Messi,lesões de Neymar e só Mbappe sendo referencia de gols,fica nitido que o trio dos sonhos não funcionou
     </Card.Text>
   </Card.Body>
 </Card>

      
          <h1>Hello World</h1>

          <Button variant='primary'>Primary</Button>
          </Container>*/}
     </div>  
  );
}

export default App;
