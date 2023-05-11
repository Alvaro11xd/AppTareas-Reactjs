// Accediendo a la lista de tareas

import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"

const ListaTareas = () => {

    // usando el contexto
    const { tareas, eliminarTarea, toggleTaskDone } = useContext(GlobalContext)

    return (
        <div className="boxlista flex justify-center">

            {/* <button onClick={() => eliminarTarea()}>Eliminar tareas</button> */}

            {/* recorriendo lista de tareas */}
            <div className="w-6/12">
                {tareas.map(tarea => (
                    <div key={tarea.id} className="bg-gray-900 px-20 py-5 text-white shadow-2xl mb-4 flex justify-between">
                        <h1> {tarea.titulo} </h1>
                        {/* <h6> {tarea.id} </h6> */}
                        <p> {tarea.descripcion} </p>

                        <button className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2"
                            onClick={() => toggleTaskDone(tarea.id)}>
                            {tarea.done ? 'No terminado' : 'Terminado'}
                        </button>

                        <div>
                            <Link to={`/editar/${tarea.id}`}>
                                <button className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2 rounded-lg text-white">
                                    Editar
                                </button>
                            </Link>
                            <button className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2 rounded-lg"
                                onClick={() => eliminarTarea(tarea.id)}>
                                Eliminar
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ListaTareas
