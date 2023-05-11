export default function appReducer(state, { type, payload }) {

    switch (type) {
        case "ADD_TASK":
            return {
                tareas: [...state.tareas, payload],
            };
        case "DELETE_TASK":
            return {
                tareas: state.tareas.filter(tarea => tarea.id !== payload)
            }
        case "UPDATE_TASK":
            // eslint-disable-next-line no-case-declarations
            const tareaActualizada = payload

            // eslint-disable-next-line no-case-declarations
            const tareasActualizadas = state.tareas.map((tarea) => {
                // si el id de la tarea es igual a el id de la tarea que se va a actualizar
                if (tarea.id === tareaActualizada.id) {
                    tarea.titulo = tareaActualizada.titulo
                    tarea.descripcion = tareaActualizada.descripcion
                }
                return tarea
            })
            return {
                tareas: tareasActualizadas,
            }
        case "TOOGLE_TASK_DONE":
            return {
                tareas: state.tareas.map(tarea => tarea.id === payload ? { ...tarea, done: !tarea.done } : tarea)
            }
        default:
            return state
    }


}