import { useState } from 'react'
import Footer from './components/Footer'
import EmpleadoList from './components/EmpleadoList'


function App() {
  let empleados = [
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://images.pexels.com/photos/18351014/pexels-photo-18351014.jpeg" },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://images.pexels.com/photos/7640433/pexels-photo-7640433.jpeg" },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg" },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg" },
  { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg" },
  { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg" },
  { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://images.pexels.com/photos/7752809/pexels-photo-7752809.jpeg" },
  { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://images.pexels.com/photos/14156484/pexels-photo-14156484.jpeg" },
  { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://images.pexels.com/photos/7752846/pexels-photo-7752846.jpeg" },
  ];

  return (
    <>
      <main className='container'>
        <h1>Lista de Empleados</h1>
        <EmpleadoList empleados={empleados}></EmpleadoList>
      </main>
       <Footer></Footer> 
    </>
  )
}

export default App
