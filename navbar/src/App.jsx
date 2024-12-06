import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './componts/NavBar'
import Home from './paginas/Home'
import Contato from './paginas/Contato'
import Autores from './paginas/Autores'
import Sobre from './paginas/Sobre'
import Inesitente from './paginas/inexistente'

function App() {
  return (
    <>
     <Router>
      <NavBar/>
       <Routes>
          <Route path='/' element={<Home/>}>

          </Route>

          <Route path='contato' element={<Contato/>}>
          
          </Route>

          <Route path='/autores' element={<Autores/>}>
          
          </Route>

          <Route path='/sobre' element={<Sobre/>}>
          
          </Route>

          <Route path='/inexistente' element={<Inesitente/>}>
          
          </Route>
       </Routes>
     </Router>
    </>
  )
}

export default App
