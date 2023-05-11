import { Link } from "react-router-dom"

// React Icons
import {IoIosAddCircle} from "react-icons/io"

const Heading = () => {
    return (
        <div>
            <div className="header flex items-center mb-10">
                <Link to={"/"}>
                    <h5 className="text-gray-100">Aplicación de Tareas</h5>
                </Link>
                <div className="flex-grow text-right px-4 py-2 m-2">
                    <Link to={"/agregar"}>
                        <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                            <IoIosAddCircle/>
                            Agregar Tareas
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Heading
