
import './App.css'
import Home2 from './pages/Home2'
import Home from './pages/Home'
import{Routes,Route} from 'react-router-dom'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
     
     
    </>
  )
}

export default App
