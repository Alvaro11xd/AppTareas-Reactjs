import './App.css'

// React router
import { Route, Routes } from 'react-router-dom'

// Componentes
import Heading from './components/Heading'
import ListaTareas from './components/ListaTareas'
import FormularioTareas from './components/FormularioTareas'
import { ContextProvider } from './context/GlobalContext'

function App() {
  return (
    <>
      <div className='boxpadre h-screen text-white text-center p-10'>
        <div className='container mx-auto h-full'>
          {/* todos los componentes hijos pueden acceder al array de tareas del global context */}
          <ContextProvider>
            <Heading />
            <Routes>
              <Route path='/' element={<ListaTareas />} exact />
              <Route path='/agregar' element={<FormularioTareas />} />
              <Route path='/editar/:id' element={<FormularioTareas />} />
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </>
  )
}

export default App
