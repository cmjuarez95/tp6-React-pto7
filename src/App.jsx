import { useState } from 'react'
import Footer from './components/Footer'
import EmpleadoList from './components/EmpleadoList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='container'>
        <h1>Lista de Empleados</h1>
        <EmpleadoList></EmpleadoList>
      </main>
       <Footer></Footer> 
    </>
  )
}

export default App
