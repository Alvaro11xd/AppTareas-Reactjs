import { createContext, useReducer } from "react";
import appReducer from './AppReducer'
import { v4 } from "uuid";

const listaTareas = {
    tareas: [
        // {
        //     id: "1",
        //     titulo: "titulo uno",
        //     descripcion: "desc titulo uno",
        //     done: false
        // },
        // {
        //     id: "2",
        //     titulo: "titulo dos",
        //     descripcion: "desc titulo dos",
        //     done: true
        // },
    ],
}

const initialState = listaTareas


export const GlobalContext = createContext(initialState)

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {

    // const [state, dispatch] = useReducer(reducer, initialState, init)
    const [state, dispatch] = useReducer(appReducer, initialState)

    // agregando tareas
    const agregarTarea = (tarea) => {
        dispatch({ type: 'ADD_TASK', payload: { ...tarea, id: v4(), done: true } })
    }

    // eliminar tarea
    const eliminarTarea = (id) => dispatch({ type: 'DELETE_TASK', payload: id })

    // actualizando tarea
    const actualizarTarea = (tarea) => dispatch({ type: 'UPDATE_TASK', payload: tarea })

    // cambiando el estado de la tarea
    const toggleTaskDone = id => dispatch({type: 'TOOGLE_TASK_DONE', payload: id})

    return <GlobalContext.Provider value={{ ...state, agregarTarea, eliminarTarea, actualizarTarea, toggleTaskDone }}>
        {children}
    </GlobalContext.Provider>
}