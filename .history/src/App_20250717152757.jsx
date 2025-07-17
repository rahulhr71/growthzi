
import './App.css'
import Home2 from './pages/Home2'
import Home from './pages/Home'
import{Routes,Route} from 'react-router-dom'
import {TextProvider } from './context/textContext'
function App() {


  return (
    <>
    <TextProvider>
    <Routes>
      <Route path='/HOME1' element={<Home/>}/>
      <Route path='*' element={<Home2/>}/>
    </Routes>
    </TextProvider>
     
     
    </>
  )
}

export default App
