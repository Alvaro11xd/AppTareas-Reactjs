import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useNavigate, useParams } from "react-router-dom"

const FormularioTareas = () => {

    // accediendo a el array tareas ubicado en el global context
    // ahora se puede acceder a datos, métodos, etc del global context
    const { agregarTarea, tareas, actualizarTarea } = useContext(GlobalContext)
    // console.log(tareas)

    const navigate = useNavigate()
    const params = useParams()


    // creando el estado del componente
    const [tarea, setTarea] = useState({
        id: '',
        titulo: '',
        descripcion: '',
    })

    // manejando el cambio de estado del componente
    const handleChange = e => setTarea({ ...tarea, [e.target.name]: e.target.value }) // agregando y actualizando el estado
    // console.log(e.target.name, e.target.value)

    // manejando el envio del formulario
    const handleSubmit = e => {
        e.preventDefault()

        if (tarea.id) {
            actualizarTarea(tarea)
        } else {
            agregarTarea(tarea)
        }

        navigate("/") // redirigiendo a la pagina principal
    }

    useEffect(() => {

        // comprobando si existe el id
        const tareaEncontrada = tareas.find((tarea) => tarea.id === params.id)

        if (tareaEncontrada) {
            setTarea(tareaEncontrada)
        }
    }, [params.id, tareas])

    return (
        <div className="flex justify-center items-center h-3/4">
            <form onSubmit={handleSubmit} className="bg-gray-900 p-10">
                <h2 className="mb-7 text-3xl">
                    {tarea.id ? 'Editando tarea' : 'Guardando tarea'}
                </h2>

                <div className="mb-5">
                    <input type="text"
                        name="titulo"
                        placeholder="Escribe un titulo"
                        onChange={handleChange}
                        value={tarea.titulo}
                        className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
                    />
                </div>
                <div className="mb-5">
                    <textarea name="descripcion"
                        rows={2}
                        placeholder="Escribe una descripción"
                        onChange={handleChange}
                        value={tarea.descripcion}
                        className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
                    ></textarea>
                </div>
                <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
                    {tarea.id ? 'Actualizar' : 'Guardar'}
                </button>
            </form>
        </div>
    )
}

export default FormularioTareas
