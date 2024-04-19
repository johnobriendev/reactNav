import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='flex flex-col'>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
